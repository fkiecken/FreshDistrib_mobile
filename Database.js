import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Database extends React.Component {

          render(){
      
            return (

            <View style={styles.container}>
              <Text>Shop gros pdpp</Text>
            </View>
            );
        }

}

const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'center',
      backgroundColor: '#ffffff',
    },
    logo: {
        height: 300,
        width: 300,
    },
    titre1: {
        fontFamily: 'YuseiMagic', 
        fontSize: 24, 
        textAlign: 'center', 
        marginLeft:20, 
        marginRight: 20
    },
    info: {
        marginTop: -100,
        alignItems: 'center',
    },
    scrollView: {
        width: '100%',
        alignItems: 'center',
    },
    details: {
        fontFamily: 'Raleway', 
        fontSize: 16, 
        marginTop: 15, 
        marginLeft:20, 
        marginRight: 20
    },
  });

export default Database;