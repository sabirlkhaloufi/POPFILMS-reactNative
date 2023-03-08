import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';

const DetaillFilm = () => {
  return (
    <ImageBackground
      style={styles.bg}
      source={require('./images/bg.jpg')}></ImageBackground>
  );
};

export default DetaillFilm;

const styles = StyleSheet.create({
  bg: {
    height: '100%',
    width: '100%',
  },
});
