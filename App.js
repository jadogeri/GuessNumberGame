
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";

//in this file we have three route names
//Home, components and Lists are keys ** route names**
// which will be diplayed to the screen immediately using navigate function
const navigator = createStackNavigator(
  {
    Home : HomeScreen,    
   
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Guess Number Game App",
    },
  }
);


export default createAppContainer(navigator);
