import {Text, StyleSheet, View, StatusBar, ImageBackground} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Films from './src/screens/Films';
import DetaillFilm from './src/screens/DetaillFilm';
import store from './src/redux/store/Store';
import {Provider} from 'react-redux';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Films"
            component={Films}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Detaill"
            component={DetaillFilm}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
