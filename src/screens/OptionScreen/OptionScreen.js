import React from "react";
import { Alert, Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useReducer, useState } from "react"
import GameIcon from "../../components/label/GameIcon/GuessNumberGameIcon"
import styles from "./Styles"
import CharacterButton from "../../components/button/CharacterButton/Index"
import NavigationButton from "../../components/button/ScreenNavigationButton/Index"
import reducer from "../../components/module/CharacterButtonReducer"

let isPressed = 'false';
const RED_EX_ICON = require('../../../assets/images/redEx.jpg');
const GREEN_CHECK_ICON = require('../../../assets/images/greenCheck.jpg');
const OptionScreen = (props) => {

  const [promptWarning, setMessage] = useState({ message: '' })
  const [state, dispatch] = useReducer(reducer,
    {
      cpuIconPressedStatus: RED_EX_ICON,
      brainIconPressedStatus: RED_EX_ICON,
      buttonPressed: GREEN_CHECK_ICON,
      buttonUnpressed: RED_EX_ICON,
      player:''

    });

  console.log('line 23', state);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.text}> Choose Who is performing the guesses </Text>
        <CharacterButton text='char button'
          image={require('../../../assets/images/brain.jpg')}
          pressedImage={state.brainIconPressedStatus}
          changePressedStatusIcon={() => {promptWarning.message = '',
             dispatch({ attributeToChange: "person", amount: GREEN_CHECK_ICON }) }} />
        <CharacterButton text={'char button'}
          image={require('../../../assets/images/laptop.jpg')}
          pressedImage={state.cpuIconPressedStatus}
          changePressedStatusIcon={() => { promptWarning.message ='', dispatch({ attributeToChange: "cpu", amount: GREEN_CHECK_ICON }) }} />
        <NavigationButton navigateToScreen={
          state.brainIconPressedStatus === state.buttonPressed || state.cpuIconPressedStatus === state.buttonPressed ?
            () => {
              setMessage(
                { message: '' }
              ),
              console.log(state.cpuIconPressedStatus, state.brainIconPressedStatus),
                props.navigation.navigate('Game', state)
            } :
            () => {setMessage({
                message : 'Choose Option above' 
              })
            }}
          text='Start' />         

      </View>
      <Text style={{fontSize:20,justifyContent:'center',color: 'red',marginBottom:200}}> {promptWarning['message']}</Text>
     
    </View>
  )
};

export default OptionScreen;
