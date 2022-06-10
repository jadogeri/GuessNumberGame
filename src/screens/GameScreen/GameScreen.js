import React from "react";
import { Alert, Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useState } from "react"
import GameIcon from "../../components/label/GameIcon/GuessNumberGameIcon"
import { randomNumberGenerator } from "../../components/module/NumberGenerator";
import * as RangeResster from "../../components/module/NumberRangeResetter"
import {getImage} from "../../components/module/ImageGenerator"
import styles from "./Styles"

let icon ;
//<Button title = "ComponentScreen" onPress = {()=> { navigation.navigate("Components")/> 
const GameScreen = (props) => {
  try{
  const player = props.navigation.getParam('player');
    console.log(icon = getImage(player));
  }catch(e){console.log(e);}

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image  source={icon}/>
      </View><View style={{flex:1,backgroundColor:'blue'}}>
      <Text style={{fontSize:100,color:'red'}}> my name is joseph adogeri </Text>
      </View>
      <View>
        <Text>Count</Text>
      </View>

    </View>
  )
};

export default GameScreen;
