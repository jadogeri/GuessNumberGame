import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity} from "react-native";
import { useState } from "react"
import GameIcon from "../../components/label/GameIcon/GuessNumberGameIcon"
import { randomNumberGenerator } from "../../components/module/NumberGenerator";
import * as RangeResster from "../../components/module/NumberRangeResetter"
import styles from "./Styles"

const MAX_NUMBER = 100;
const MIN_NUMBER = 1;
//<Button title = "ComponentScreen" onPress = {()=> { navigation.navigate("Components")/> 
const HomeScreen = (props) => {

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <GameIcon />
      </View>

      <View>
        <TouchableOpacity onPress={() =>{ props.navigation.navigate("Game")}}>
          <Image source={require('../../../assets/images/powerbutton.jpg')}/>
        </TouchableOpacity>
      </View>

    </View>
  )
};


export default HomeScreen;
