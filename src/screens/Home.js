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
} from 'react-native';
import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import StarRating from 'react-native-star-rating';

const Home = ({navigation}) => {
  const [search, setSearch] = useState('');
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
            <View style={styles.categorie}>
              <TouchableOpacity style={styles.square}>
                <AntDesign name="star" size={35} color="white" />
              </TouchableOpacity>
              <Text style={{color: 'white', marginTop: 3}}>Popular</Text>
            </View>
            <View style={styles.categorie}>
              <TouchableOpacity style={styles.square}>
                <AntDesign name="star" size={35} color="white" />
              </TouchableOpacity>
              <Text style={{color: 'white', marginTop: 3}}>Popular</Text>
            </View>
            <View style={styles.categorie}>
              <TouchableOpacity style={styles.square}>
                <AntDesign name="star" size={35} color="white" />
              </TouchableOpacity>
              <Text style={{color: 'white', marginTop: 3}}>Popular</Text>
            </View>
            <View style={styles.categorie}>
              <TouchableOpacity style={styles.square}>
                <AntDesign name="star" size={35} color="white" />
              </TouchableOpacity>
              <Text style={{color: 'white', marginTop: 3}}>Popular</Text>
            </View>
          </View>
        </View>

        <View style={styles.films}>
          <Text style={{color: 'white', fontSize: 20, marginVertical: 10}}>
            Films
          </Text>
          <ScrollView>
            <View style={styles.filmsList}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Detaill')}
                style={styles.film}>
                <Image
                  style={{width: 150, height: 200, borderRadius: 20}}
                  source={require('./images/filmimg.png')}
                />
                <View style={styles.topImage}>
                  <Text style={{color: 'white', fontSize: 18}}>
                    Black Panther: Wakanda Forever
                  </Text>
                  <StarRating
                    disabled={true} // Set to true to disable user interaction
                    maxStars={5} // The total number of stars to display
                    rating={3.5} // The rating to display
                    starSize={20} // The size of each star
                    fullStarColor="yellow" // set the color of the filled star
                    emptyStarColor="yellow" // set the color of the empty star
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.film}>
                <Image
                  style={{width: 150, height: 200, borderRadius: 20}}
                  source={require('./images/filmimg.png')}
                />
                <View style={styles.topImage}>
                  <Text style={{color: 'white', fontSize: 18}}>
                    Black Panther: Wakanda Forever
                  </Text>
                  <StarRating
                    disabled={true} // Set to true to disable user interaction
                    maxStars={5} // The total number of stars to display
                    rating={3.5} // The rating to display
                    starSize={20} // The size of each star
                    fullStarColor="yellow" // set the color of the filled star
                    emptyStarColor="yellow" // set the color of the empty star
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.film}>
                <Image
                  style={{width: 150, height: 200, borderRadius: 20}}
                  source={require('./images/filmimg.png')}
                />
                <View style={styles.topImage}>
                  <Text style={{color: 'white', fontSize: 18}}>
                    Black Panther: Wakanda Forever
                  </Text>
                  <StarRating
                    disabled={true} // Set to true to disable user interaction
                    maxStars={5} // The total number of stars to display
                    rating={3.5} // The rating to display
                    starSize={20} // The size of each star
                    fullStarColor="yellow" // set the color of the filled star
                    emptyStarColor="yellow" // set the color of the empty star
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.film}>
                <Image
                  style={{width: 150, height: 200, borderRadius: 20}}
                  source={require('./images/filmimg.png')}
                />
                <View style={styles.topImage}>
                  <Text style={{color: 'white', fontSize: 18}}>
                    Black Panther: Wakanda Forever
                  </Text>
                  <StarRating
                    disabled={true} // Set to true to disable user interaction
                    maxStars={5} // The total number of stars to display
                    rating={3.5} // The rating to display
                    starSize={20} // The size of each star
                    fullStarColor="yellow" // set the color of the filled star
                    emptyStarColor="yellow" // set the color of the empty star
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.film}>
                <Image
                  style={{width: 150, height: 200, borderRadius: 20}}
                  source={require('./images/filmimg.png')}
                />
                <View style={styles.topImage}>
                  <Text style={{color: 'white', fontSize: 18}}>
                    Black Panther: Wakanda Forever
                  </Text>
                  <StarRating
                    disabled={true} // Set to true to disable user interaction
                    maxStars={5} // The total number of stars to display
                    rating={3.5} // The rating to display
                    starSize={20} // The size of each star
                    fullStarColor="yellow" // set the color of the filled star
                    emptyStarColor="yellow" // set the color of the empty star
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.film}>
                <Image
                  style={{width: 150, height: 200, borderRadius: 20}}
                  source={require('./images/filmimg.png')}
                />
                <View style={styles.topImage}>
                  <Text style={{color: 'white', fontSize: 18}}>
                    Black Panther: Wakanda Forever
                  </Text>
                  <StarRating
                    disabled={true} // Set to true to disable user interaction
                    maxStars={5} // The total number of stars to display
                    rating={3.5} // The rating to display
                    starSize={20} // The size of each star
                    fullStarColor="yellow" // set the color of the filled star
                    emptyStarColor="yellow" // set the color of the empty star
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.film}>
                <Image
                  style={{width: 150, height: 200, borderRadius: 20}}
                  source={require('./images/filmimg.png')}
                />
                <View style={styles.topImage}>
                  <Text style={{color: 'white', fontSize: 18}}>
                    Black Panther: Wakanda Forever
                  </Text>
                  <StarRating
                    disabled={true} // Set to true to disable user interaction
                    maxStars={5} // The total number of stars to display
                    rating={3.5} // The rating to display
                    starSize={20} // The size of each star
                    fullStarColor="yellow" // set the color of the filled star
                    emptyStarColor="yellow" // set the color of the empty star
                  />
                </View>
              </TouchableOpacity>
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
  },
});
