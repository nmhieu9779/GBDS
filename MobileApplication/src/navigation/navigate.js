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
    AuthLoadingScreen: { screen: AuthLoadingScreen },
    AuthStack: { screen: AuthScreen },
    HomeStack: { screen: HomeStack }
  }),
  {
    initialRouteName: "AuthLoadingScreen",
    headerMode: "none"
  }
)

export default AppContainer
