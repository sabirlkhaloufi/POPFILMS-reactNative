import {StyleSheet, View, Dimensions, Text} from 'react-native';
import {Link} from '@react-navigation/native';

export default function Navbar() {
  return (
    <View style={styles.navBar}>
      <View style={styles.icons}>
        <Link to={{screen: 'Pharmacies'}}>
          <View style={styles.circle}>
            <Text>sksk</Text>
          </View>
        </Link>

        <Link to={{screen: 'maps'}}>
          <View style={styles.circle}>
            <Text>sksk</Text>
          </View>
        </Link>

        <Link to={{screen: 'Favorite'}}>
          <View style={styles.circle}>
            <Text>sksk</Text>
          </View>
        </Link>

        <Link to={{screen: 'Setting'}}>
          <View style={styles.circle}>
            <Text>sksk</Text>
          </View>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'rgba(118, 118, 128, 0.12)',
    borderRadius: 30,
    position: 'absolute',
    height: 70,
    width: 300,
    bottom: 10,
    left: (Dimensions.get('window').width - 300) / 2,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.27,
    // shadowRadius: 4.65,
    // elevation: 6,
  },
  icons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: 'white',
    height: 50,
    width: 50,
    borderRadius: 50,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.27,
    // shadowRadius: 4.65,
    // elevation: 3,
  },
  icon: {
    textAlign: 'center',
    marginTop: 10,
  },
});
