import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import Styles from './Styles';


//<Button title = "ComponentScreen" onPress = {()=> { navigation.navigate("Components")/> 
const CharacterButton = (props) => {

  return <TouchableOpacity style={Styles.container} 
                           onPress={props.changePressedStatusIcon}>
          <Image source={props.image} style={Styles.imageStyle}/>
          <Image source={props.pressedImage} style={Styles.pressedImageStyle}/>

      </TouchableOpacity>             
    

};


export default CharacterButton;
