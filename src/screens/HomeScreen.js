import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useState } from "react"
import GameIcon from "../components/label/GuessNumberGameIcon"

let alertPrompt = 'button pressed';
const MAX_NUMBER = 100;
const MIN_NUMBER = 1;
//<Button title = "ComponentScreen" onPress = {()=> { navigation.navigate("Components")/> 
const HomeScreen = (props) => {

  return (
    <View style={styles.container}>
      <View>
        <GameIcon />
      </View>
      <Text> my name is joseph adogeri </Text>

      <View>
        <Text>Count</Text>
      </View>

    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 10,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: 'center',
    textShadowColor: 'blue',
    textShadowRadius: 20

  },
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    borderWidth: 3
  }
});

export default HomeScreen;
