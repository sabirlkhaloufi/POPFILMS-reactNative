import {
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import StarRating from 'react-native-star-rating';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMovies} from '../redux/store/moviesSlice';
import axios from 'axios';

const categories = [
  {categorie: 'popular', icon: 'star', Active: false},
  {categorie: 'top_rated', icon: 'star', Active: false},
  {categorie: 'upcoming', icon: 'star', Active: false},
  {categorie: 'now_playing', icon: 'star', Active: false},
];

const Home = ({navigation}) => {
  const [search, setSearch] = useState('');

  const [categorie, setCategorie] = useState('popular');

  const filterCategory = cat => {
    setCategorie(cat);
  };

  const searchMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${search}`,
      )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    searchMovies();
    // dispatch(searchMovies(search));
  }, [search]);

  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.movies);
  const status = useSelector(state => state.movies.status);
  const error = useSelector(state => state.movies.error);

  useEffect(() => {
    dispatch(fetchMovies(categorie));
  }, [categorie]);

  console.log(movies);

  if (status === 'failed') {
    return <Text>{error}</Text>;
  }
  return (
    <>
      <ImageBackground style={styles.bg} source={require('./images/bg.jpg')}>
        <View style={styles.header}>
          <View style={styles.name}>
            <Text style={{color: 'white', fontSize: 24}}>Hello Daizy!</Text>
            <Text style={{color: '#A0A0A0', marginTop: '3%'}}>
              Check for latest addition.
            </Text>
          </View>
          <View style={styles.avatar}>
            <Image source={require('./images/avatar.png')} />
          </View>
        </View>
        <View style={styles.search}>
          <AntDesign name="search1" size={20} color="white" />
          <TextInput
            style={styles.input}
            onChangeText={text => setSearch(text)}
            value={search}
          />
          <Feather style={{}} name="mic" size={20} color="white" />
        </View>

        <View style={styles.filter}>
          <Text style={{color: 'white', fontSize: 20}}>Filters</Text>
          <View style={styles.squares}>
            {categories.map(category => {
              return (
                <View style={styles.categorie}>
                  <TouchableOpacity
                    style={styles.square}
                    onPress={() => filterCategory(category.categorie)}>
                    <AntDesign name={category.icon} size={35} color="white" />
                  </TouchableOpacity>
                  <Text style={{color: 'white', marginTop: 3}}>
                    {category.categorie}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>

        <View style={styles.films}>
          <Text style={{color: 'white', fontSize: 20, marginVertical: 10}}>
            {categorie}
          </Text>
          <ScrollView>
            <View style={styles.filmsList}>
              {!movies ? (
                <ActivityIndicator
                  style={{marginTop: 100}}
                  size="large"
                  color="#fff"
                />
              ) : (
                movies.map(movie => {
                  return (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('Detaill', {id: movie.id})
                      }
                      style={styles.film}>
                      <Image
                        style={{width: 150, height: 200, borderRadius: 20}}
                        source={{
                          uri:
                            'https://image.tmdb.org/t/p/w500' +
                            movie.backdrop_path,
                        }}
                      />
                      <View style={styles.topImage}>
                        <View style={styles.rating}>
                          <Text style={{color: 'black'}}>
                            {movie.vote_average}
                          </Text>
                        </View>
                        <Text style={{color: 'white', fontSize: 18}}>
                          {movie.title}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })
              )}
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
      {/* <Navbar /> */}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  bg: {
    height: '100%',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
    marginHorizontal: '5%',
    alignItems: 'center',
  },
  name: {
    color: 'white',
  },
  search: {
    backgroundColor: 'rgba(118, 118, 128, 0.12)',
    // width: '100%',
    height: 50,
    marginHorizontal: '4%',
    borderRadius: 15,
    marginTop: '6%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  input: {
    width: '85%',
    color: 'white',
  },
  filter: {
    marginTop: 20,
    marginHorizontal: '4%',
  },
  squares: {
    marginVertical: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  square: {
    backgroundColor: '#51535D',
    width: 60,
    height: 60,
    borderRadius: 10,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categorie: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  films: {
    marginHorizontal: '5%',
    marginBottom: 150,
  },
  filmsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  film: {
    position: 'relative',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  topImage: {
    position: 'absolute',
    width: 150,
    backgroundColor: 'rgba(9, 9, 15, 0.6)',
    height: '100%',
    justifyContent: 'flex-end',
    paddingBottom: 20,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  rating: {
    marginTop: 5,
    backgroundColor: '#FFC837',
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
