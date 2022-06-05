import React from "react";
import Styles from '../components/carItems/Styles'
import CarItem from "../components/carItems/Index";

import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

let promptLog = 'button pressed';
let alertPrompt = 'button pressed';

//<Button title = "ComponentScreen" onPress = {()=> { navigation.navigate("Components")/> 
const HomeScreen = (props) => {

  return <View style={styles.container}>

             <CarItem />   
                
    
  </View>

};

const styles = StyleSheet.create({
  text: {
    fontSize: 70,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: 'center',
    textShadowColor: 'blue',
    textShadowRadius: 20

  },
  container:{
      flex:1,
      backgroundColor:'#ffff',
      alignItems: 'center',
      justifyContent: 'center'
  }
});

export default HomeScreen;
