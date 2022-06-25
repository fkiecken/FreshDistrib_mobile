import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

class Shop extends React.Component {

  instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });

  constructor(props) {
    super(props);
    this.state = {
      dataSource:[],
      fakeData:[
        {
          name: 'Ferme des 4 charues',
          phone: '06 58 98 45 78',
          schedules: '24h/24 - 7j/7',
          address: '26 Rue zombria Agny 62859',
          products: [{name: 'Tomate'}, {name: 'Salade'}, {name: 'Pomme de terre'}],
          payment_methods: [{name: 'Liquide'}, {name: 'Carte bancaire'}]
        },
        {
          name: 'Yves et huguettes bonapéti',
          phone: '06 45 82 65 78 91',
          schedules: '24h/24 - 7j/7',
          address: '3 Allée des nobles Tilloy Les Mofflaines',
          products: [{name: 'Poulet roti'}, {name: 'Oeuf'}, {name: 'Fraise'}, {name: 'Framboise'}],
          payment_methods: [{name: 'Liquide'}, {name: 'Carte bancaire'}]
        },
        {
          name: 'Chez Gaec Barbet',
          phone: '07 44 52 61 48',
          schedules: '24h/24 - 7j/7',
          address: "157 Rue d'Arras, 62223 Feuchy",
          products: [{name: 'Chou fleur'}, {name: 'Salade'}, {name: 'Pomme de terre'}, {name: 'Endive'}, {name: 'Courge'}, {name: 'Poireau'}],
          payment_methods: [{name: 'Liquide'}]
        },
      ]
     };
   }

  componentDidMount(){

    var myInit = {
      method: 'GET',
      headers: {
        'Authorization' : "Token 3c33a01e4864731716b277863fdbb20b617ba116",
      },
      mode: 'cors',
      cache: 'default',
    };

    fetch("http://51.178.41.189:8011/api/distributors/", myInit)
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       dataSource: responseJson
      })

    /*  
    const listMethodPaiement = this.state.dataSource.map(x => x.payment_methods);
    for (const element of listMethodPaiement) {
      console.log(element[0].name);
    }
    */


    })
    .catch(error=>console.log(error)) //to catch the errors if any
    }
  

  render(){

      return (
        <View>
        <Image 
        style={styles.fraiseicone}
        source={require('../assets/img/fraise_list.png')}
        />
        <Text style={styles.titre1}>Liste des distributeurs</Text>
        <FlatList
          style={styles.list}
          data={Object.keys(this.state.fakeData)}
           renderItem={({item}) => 
           <View style={styles.card}>
           <Text style={styles.name}><Text style={styles.textgen}>Nom du distributeur : </Text>{this.state.fakeData[item].name}</Text>
           <Text style={styles.adress}><Text style={styles.textgen}>Telephone : </Text>{this.state.fakeData[item].phone}</Text>
           <Text style={styles.status}><Text style={styles.textgen}>Horaire : </Text>{this.state.fakeData[item].schedules}</Text>
           <Text style={styles.prod_dispo}><Text style={styles.textgen}>Adresse : </Text>{this.state.fakeData[item].address}</Text>
           <Text style={styles.prod_dispo}><Text style={styles.textgen}>Produit(s) disponible(s) : </Text>{this.state.fakeData[item].products.map(x => x.name + ", ")}</Text>
           <Text style={styles.prod_dispo}><Text style={styles.textgen}>Moyen(s) de paiement(s) : </Text>{this.state.fakeData[item].payment_methods.map(x => x.name  + ", ")}</Text>
           </View>
          }
          keyExtractor={(item, index) => index.toString()}
         />
        <Image 
        style={styles.pommeicone}
        source={require('../assets/img/pomme_list.png')}
        />
       </View>
      );
  }

}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: 300,
  },
  card: {
    padding: 20,
    width: 270,
    height: 250,
    backgroundColor: '#ffffff',
    marginTop: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,    
    elevation: 2,
    marginLeft: '5%',
    marginRight: '4%',
  },
  titre1: {
    fontFamily: 'YuseiMagic', 
    fontSize: 24, 
    textAlign: 'center', 
    marginLeft: 20, 
    marginRight: 20,
    marginTop: 50
  },
  textgen: {
    fontWeight: 'bold',
    textAlign: 'center', 
  },
  fraiseicone: {
    width: 80,
    height: 106,
    top: 20,
    left: -40,
    position: 'absolute',
  },
  pommeicone: {
    width: 106,
    height: 108,
    position: 'absolute',
    bottom: -10, 
    right: -40,
  }
});

export default Shop;