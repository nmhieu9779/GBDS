import AuthScreen from "../AuthScreen"
import AuthLoadingScreen from "../AuthLoadingScreen"
import HomeStack from "./HomeStack"
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  withNavigationFocus,
  createSwitchNavigator
} from "react-navigation"

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      HomeStack: {screen: HomeStack},
      AuthLoadingScreen: {screen: AuthLoadingScreen},
      AuthStack: {screen: AuthScreen}
    },
    {
      initialRouteName: "HomeStack"
    }
  )
)

export default AppContainer
