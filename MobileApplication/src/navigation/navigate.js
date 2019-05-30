import AuthScreen from "@src/screen/AuthScreen"
import AuthLoadingScreen from "@src/screen/AuthLoading"
import HomeStack from "./HomeStack"
import {createAppContainer, createSwitchNavigator} from "react-navigation"

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
