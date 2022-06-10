import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import Styles from './Styles';


const CharacterButton = (props) => {

  return   <TouchableOpacity style={Styles.container} onPress = {props.navigateToScreen}>

      <Text style={Styles.textStyle}>{props.text}</Text>

    </TouchableOpacity>
  



};


export default CharacterButton;
