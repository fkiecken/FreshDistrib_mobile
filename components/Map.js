import React from 'react';
import { StyleSheet, Image, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { Marker } from 'react-native-maps';


class Map extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dataSource:[],
      location : {
        coords : {
          latitude : 51.02992267299276,
          longitude : 2.373891500663235,
          },
      },
      markerDistrib: [],
      errorMessage: null
    };
  }



  findLocalisationAndAddDistrib = async () => {

    if (this.state.isShowLocation == true)
    {
      let { status} = await Permissions.askAsync(Permissions.LOCATION);  
      if (status !=='granted' ) {
        this.setState({
          errorMessage : 'Localisation desactivé'
        });
      }
  
      let location = await Location.getCurrentPositionAsync({});
      this.setState({ location });
      this.forceUpdate();
        this.setState({
            isShowLocation:false,
            forceRefresh: Math.floor(Math.random() * 100)
        })
    }
    else{
      let { status} = await Permissions.askAsync(Permissions.LOCATION);
    
      if (status !=='granted' ) {
        this.setState({
          errorMessage : 'Localisation desactivé'
        });
      }
  
      let location = await Location.getCurrentPositionAsync({});
      
      this.setState({ location });
      this.forceUpdate();
        this.setState({
            isShowLocation:true,
            forceRefresh: Math.floor(Math.random() * 100)
        })
    }

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
    this.setState({dataSource: responseJson})
    const listDistrib5 = this.state.dataSource
    for (const element of listDistrib5) {
       this.state.markerDistrib.push(
        <Marker
          key={element.id}
          coordinate={{ latitude : element.latitude , longitude : element.longitude }}
          title={element.name}
          description={
            "Adresse : " + element.address +
            "Téléphone : " + element.phone  + 
            "Horaires : " + element.sheschedules
          }
          pinColor={'orange'}
        />
       );
        this.forceUpdate();
        this.setState({
            isShowLocation:true,
            forceRefresh: Math.floor(Math.random() * 100),
            dataSource: element
        })
  }
      })
    .catch(error=>console.log(error))
  }

  render(){

    let text ='';
    let latitudeR = JSON.parse(this.state.location.coords.latitude);
    let longitudeR = JSON.parse(this.state.location.coords.longitude);

    if (this.state.errorMessage){
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location.coords.latitude) + " - " + JSON.stringify(this.state.location.coords.longitude);
      latitudeR = JSON.parse(this.state.location.coords.latitude);
      longitudeR = JSON.parse(this.state.location.coords.longitude);
    }

      return (
        
        <View style={styles.container}>    
          <MapView 
              key={this.state.forceRefresh}
              initialRegion={{
                  latitude: latitudeR,
                  longitude: longitudeR,
                  latitudeDelta: 0.5922,
                  longitudeDelta: 0.5421}}
              style={styles.map}
          >
          <Marker
            coordinate={{ latitude : latitudeR , longitude : longitudeR}}
            title={"Vous êtes ici"}
          >
            <Image source={require('../assets/img/user-location.png')} style={{height: 75, width:75 }} />
          </Marker>
          <Marker
          key={6}
          coordinate={{ latitude : 50.261679407663884, longitude : 2.756903320465509 }}
          title={"Distributeur n°1"}
          description={
            "Adresse : 2 Rue des exemples" +
            "Téléphone : 06 50 98 75 65" +
            "Horaires : 24h/24 - 7j/7"
          }
          pinColor={'orange'}
        />
         <Marker
          key={7}
          coordinate={{ latitude : 50.29441941681301, longitude : 2.84415715953288 }}
          title={"Distributeur n°2"}
          description={
            "Adresse : 2 Rue des exemples\n" +
            "Téléphone : 06 50 98 75 65\n" +
            "Horaires : 24h/24 - 7j/7"
          }
          pinColor={'orange'}
        />
        <Marker
          key={8}
          coordinate={{ latitude : 50.27832321247269, longitude : 2.816106058120828 }}
          title={"Distributeur n°2"}
          description={
            "Adresse : 2 Rue des exemples" +
            "Téléphone : 06 50 98 75 65" +
            "Horaires : 24h/24 - 7j/7"
          }
          pinColor={'orange'}
        />
            {this.state.markerDistrib}
          </MapView>
          <TouchableOpacity
              onPress={ () =>{this.findLocalisationAndAddDistrib()}}
              style={styles.customBtnBG} >
              <Image style={styles.refresh} source={require('../assets/img/refresh_map.png')} />
          </TouchableOpacity>
        </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
  
    },
    customBtnText: {
        fontSize: 40,
        fontWeight: '400',
        color: "#705c4c",
        fontSize: 12,
        textAlign: 'center',
    },
    customBtnBG: {
        zIndex: 1,
        position: 'absolute',
        bottom: 0,
        right: 0,
        marginRight: 25,
        marginBottom: 25,
    },
    refresh: {
        marginRight: 20,
        marginBottom: 20,
        borderRadius: 30,
        width: 70,
        height: 71,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    }
  });

export default Map;