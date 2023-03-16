import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import StarRating from 'react-native-star-rating';
import {ApiKey} from '../Utils/ApiKey';

const SearchMovies = ({search, navigation}) => {
  const pathImg = 'https://image.tmdb.org/t/p/w500';

  const [movies, setMovies] = useState([]);
  const searchMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${search}`,
      )
      .then(response => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    searchMovies();
  }, [search]);

  return (
    <View style={styles.searchMovies}>
      <ScrollView>
        <View style={styles.movies}>
          {movies ? (
            movies.map(movie => {
              return (
                <TouchableOpacity
                  key={movie.id}
                  style={styles.movie}
                  onPress={() =>
                    navigation.navigate('Detaill', {id: movie.id})
                  }>
                  <Image
                    style={{width: '100%', height: 150, borderRadius: 10}}
                    source={{uri: pathImg + movie.backdrop_path}}
                  />
                  <View style={styles.infoMovie}>
                    <Text style={{color: 'white', fontSize: 20}}>
                      {movie.title}
                    </Text>

                    <View style={styles.rating}>
                      <StarRating
                        disabled={true} // Set to true to disable user interaction
                        maxStars={5} // The total number of stars to display
                        rating={movie.vote_average / 2} // The rating to display
                        starSize={20} // The size of each star
                        fullStarColor="#FFC837" // set the color of the filled star
                        emptyStarColor="#FFC837" // set the color of the empty star
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })
          ) : (
            <Text>qllql</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchMovies;

const styles = StyleSheet.create({
  searchMovies: {
    marginTop: 150,
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.78)',
    height: '100%',
    width: '100%',
    // zIndex: 2,
  },
  movie: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 20,
    position: 'relative',
  },
  infoMovie: {
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 10,
    paddingBottom: 20,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
  },
  rating: {
    width: 150,
  },
});
