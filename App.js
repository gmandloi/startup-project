/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';


/*Imported the components*/
import splashScreen from './src/splashScreen/splashScreen';

const MainNavigator = createStackNavigator(
  {
    splashScreen: {screen: splashScreen},
  }, 
  {
    defaultNavigationOptions: {
      header: null,
    }
  }
);

const AppNavigator = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}