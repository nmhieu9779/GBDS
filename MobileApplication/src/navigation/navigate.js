import AuthScreen from "../AuthScreen"
import HomeScreen from "../HomeScreen/HomeScreen"
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  withNavigationFocus,
  createSwitchNavigator
} from "react-navigation"

const AppContainer = createAppContainer(
  createSwitchNavigator({
    Authentication: { screen: AuthScreen },
    HomeScreen: { screen: HomeScreen }
  }),
  {
    initialRouteName: "Authentication",
    headerMode: "none"
  }
)

export default AppContainer
