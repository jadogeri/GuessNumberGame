import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useState } from "react"
import GameIcon from "../../components/label/GameIcon/GuessNumberGameIcon"
import { randomNumberGenerator } from "../../components/module/NumberGenerator";
import * as RangeResster from "../../components/module/NumberRangeResetter"
import styles from "./Styles"

const MAX_NUMBER = 100;
const MIN_NUMBER = 1;
//<Button title = "ComponentScreen" onPress = {()=> { navigation.navigate("Components")/> 
const GameScreen = (props) => {

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <GameIcon />
      </View>
      <Text> my name is joseph adogeri </Text>

      <View>
        <Text>Count</Text>
      </View>

    </View>
  )
};


export default GameScreen;
