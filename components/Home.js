import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

class Home extends React.Component {
  
  render(){
      return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <View style={styles.info}>
            <Text style={{ fontFamily: 'sriracha', fontSize: 14,  marginLeft:20, marginRight: 20, marginTop: -20}}>Since 1999</Text>
            <Text style={styles.titre1}>Carte des distributeurs de produits locaux</Text>
            <Image style={{width: 309, height: 251, marginTop: 15}} source={require('../assets/img1.webp')}/>
            <Text style={styles.details}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus imperdiet tortor, at suscipit elit convallis ac. Aliquam id magna id orci ultrices aliquet sit amet ac ante.</Text>
            <Text style={styles.titre1}>Application mobile</Text>
            <Image style={{width: 253, height: 225, marginTop: 15}} source={require('../assets/img2.webp')}/>
            <Text style={styles.details}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus imperdiet tortor, at suscipit elit convallis ac. Aliquam id magna id orci ultrices aliquet sit amet ac ante.</Text>
            <Text style={styles.titre1}>Se faire livrer ?</Text>
            <Image style={{width: 300, height: 300, marginTop: 15}} source={require('../assets/img3.jpg')}/>
            <Text style={styles.details}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus imperdiet tortor, at suscipit elit convallis ac. Aliquam id magna id orci ultrices aliquet sit amet ac ante.</Text>
            <Text style={styles.titre1}>Votre distributeur de Bonheur ?</Text>
            <Text style={styles.details}>FreshDistrib est un site qui référence un maximum de distributeurs automatiques de produits locaux. Cela permet d'acheter des produits qualitatifs, ainsi que d'encourager le travail local.</Text>
          </View>
          </ScrollView>
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

export default Home;