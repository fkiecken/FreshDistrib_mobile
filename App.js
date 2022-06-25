import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import TabNavigator from './Navbar';

const fetchFonts = () => {
  return Font.loadAsync({
    sriracha: require('./assets/fonts/Sriracha-Regular.ttf'),
    YuseiMagic: require('./assets/fonts/YuseiMagic-Regular.ttf'),
    Raleway: require('./assets/fonts/Raleway-VariableFont_wght.ttf'),
    Goodmood: require('./assets/fonts/Good-Mood.ttf'),
  });
};

export default function App() {

  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <TabNavigator></TabNavigator>
  );
}