import React from "react";
//import Styles from '../components/carItems/Styles'
//import CarItem from "../components/carItems/Index";
import Styles from './GameIconStyle';

import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";


//<Button title = "ComponentScreen" onPress = {()=> { navigation.navigate("Components")/> 
const GameLogo = (props) => {

  return <View style={Styles.container}>

    <Text style={Styles.gameText}> Guess My Number </Text> 
    <Text style={Styles.questionMark}>?</Text>              
    
  </View>

};


export default GameLogo;
