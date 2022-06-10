
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import GameScreen from "./src/screens/GameScreen/GameScreen";
import OptionScreen from "./src/screens/OptionScreen/OptionScreen";

//in this file we have three route names
//Home, components and Lists are keys ** route names**
// which will be diplayed to the screen immediately using navigate function
const navigator = createStackNavigator(
  {
    Home : HomeScreen,    
    Game : GameScreen,
    Option : OptionScreen
   
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Guess Number Game App",
    },
  }
);


export default createAppContainer(navigator);
