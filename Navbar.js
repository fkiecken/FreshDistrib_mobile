import React, { useState } from 'react';import {StyleSheet, Text, View,Button} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
import * as Font from 'expo-font';
import Home from './components/Home';
import Map from './components/Map';
import Shop from './components/Shop';
import Database from './Database';

const fetchFonts = () => {
  return Font.loadAsync({
    sriracha: require('./assets/fonts/Sriracha-Regular.ttf'),
    YuseiMagic: require('./assets/fonts/YuseiMagic-Regular.ttf'),
    Raleway: require('./assets/fonts/Raleway-VariableFont_wght.ttf'),
    Goodmood: require('./assets/fonts/Good-Mood.ttf'),
  });
};

class MapScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
          <Map></Map>
        </View>  
    );  
  }  
}  
class HomeScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
          <Home></Home>  
        </View>  
    );  
  }  
}  
class ShopScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Shop></Shop> 
            </View>  
        );  
    }  
}  

  const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center'  
    },  
});  
const TabNavigator = createMaterialBottomTabNavigator(  
    {  
        Map: { screen: MapScreen,  
            navigationOptions:{  
                tabBarLabel:'Map',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'map-outline'}/>  
                    </View>),  
                activeColor: '#705c4c',  
                inactiveColor: '#9c806a',  
                barStyle: { backgroundColor: '#ceab91' },  
            }  
        },  
        Home: { screen: HomeScreen,  
          navigationOptions:{  
              tabBarLabel:'Home',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                  </View>),  
          }  
      },  
        Shop: { screen: ShopScreen,  
            navigationOptions:{  
                tabBarLabel:'Shop',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'cart-outline'}/>  
                    </View>),  
                activeColor: '#8b7a0e',  
                inactiveColor: '#d6bb10',  
                barStyle: { backgroundColor: '#f7d70d' },  
            }  
        }, 
    },  
    {  
      initialRouteName: "Home",  
      activeColor: '#3a5a24',  
      inactiveColor: '#83ce51',  
      barStyle: { backgroundColor: '#5e933a' },  
    },  
);  

const Navbar = createAppContainer(TabNavigator);

export default Navbar;
//export default createAppContainer(TabNavigator); 