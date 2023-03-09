import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import StarRating from 'react-native-star-rating';
import axios from 'axios';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player';

const pathImg = 'https://image.tmdb.org/t/p/w500';

const DetaillFilm = ({route}) => {
  const [detaillMovie, setdetaillMovie] = useState([]);
  const [actors, setActors] = useState([]);
  // const [video, setvideo] = useState(null);

  const video = {
    uri: 'https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    thumbnail: 'https://www.sample-videos.com/img/Sample-jpg-image-50kb.jpg',
    title: 'Big Buck Bunny',
    duration: 60,
  };

  const getMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=bcc4ff10c2939665232d75d8bf0ec093`,
      )
      .then(response => {
        setdetaillMovie(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getActors = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${route.params.id}/credits?api_key=bcc4ff10c2939665232d75d8bf0ec093`,
      )
      .then(response => {
        setActors(response.data.cast);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getVedeio = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${route.params.id}/videos?api_key=bcc4ff10c2939665232d75d8bf0ec093`,
      )
      .then(response => {
        console.log(response.data.results[0].key);
        // setvideo(response.data.results[0].key);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMovie();
    getActors();
    getVedeio();
  }, []);
  return (
    <View style={styles.bg}>
      <View style={styles.detaill}>
        <View style={styles.imageFilm}>
          <Image
            style={{width: '100%', height: 320, position: 'relative'}}
            source={{uri: pathImg + detaillMovie.poster_path}}
          />
          {/* <VideoPlayer video={video} autoplay={true} /> */}
          <LinearGradient
            style={{
              width: '100%',
              height: 200,
              position: 'absolute',
              bottom: -20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            colors={[
              'rgba(10, 10, 17, 0)',
              'rgba(10, 10, 17, 0.5007)',
              '#0A0A11',
              '#000',
            ]}>
            <TouchableOpacity style={styles.play}>
              <FontAwesome5
                style={{marginLeft: 2}}
                name="play"
                color="white"
                size={20}
              />
            </TouchableOpacity>
            <Text style={{color: 'white', fontSize: 25, marginTop: 10}}>
              {detaillMovie.title}
            </Text>
            <Text style={{color: '#A0A0A0', marginTop: 5, fontSize: 18}}>
              {detaillMovie.release_date}
            </Text>
          </LinearGradient>
        </View>
        <View style={styles.stars}>
          <StarRating
            disabled={true} // Set to true to disable user interaction
            maxStars={5} // The total number of stars to display
            rating={detaillMovie.vote_average / 2} // The rating to display
            starSize={28} // The size of each star
            fullStarColor="#FFC837" // set the color of the filled star
            emptyStarColor="#FFC837" // set the color of the empty star
          />
        </View>
        <View style={styles.artists}>
          <Text style={{color: 'white', fontSize: 20, marginBottom: 10}}>
            Actors
          </Text>

          <ScrollView horizontal={true}>
            <View style={styles.artistsList}>
              {actors &&
                actors.map(actor => {
                  return (
                    <View style={styles.artist}>
                      <Image
                        style={{
                          width: 100,
                          height: 100,
                          borderRadius: 100,
                          borderColor: 'white',
                          borderWidth: 3,
                        }}
                        source={{
                          uri: pathImg + actor.profile_path,
                        }}
                      />
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 16,
                          textAlign: 'center',
                        }}>
                        {actor.name}
                      </Text>
                    </View>
                  );
                })}
            </View>
          </ScrollView>
        </View>

        <View style={styles.overview}>
          <Text
            style={{
              color: '#A0A0A0',
              fontSize: 17,
              textAlign: 'center',
            }}>
            {detaillMovie.overview}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetaillFilm;

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  bg: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
  },
  imageFilm: {},
  play: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF3B30',
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  stars: {
    paddingHorizontal: 50,
  },
  artists: {
    alignItems: 'center',
    marginTop: 20,
  },
  artistsList: {
    flexDirection: 'row',
    // marginVertical: '5%',
  },
  overview: {
    marginTop: 20,
  },
  artist: {
    alignItems: 'center',
    // marginHorizontal: '2%',
    width: 120,
  },
});
