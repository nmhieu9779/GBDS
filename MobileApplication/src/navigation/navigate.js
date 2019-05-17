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
  createSwitchNavigator({
    AuthStack: { screen: AuthScreen },
    AuthLoadingScreen: { screen: AuthLoadingScreen },
    HomeStack: { screen: HomeStack }
  })
)

export default AppContainer
