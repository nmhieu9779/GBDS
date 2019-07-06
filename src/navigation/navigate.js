import Auth from "@src/screen/Auth"
import AuthLoading from "@src/screen/AuthLoading"
import HomeStack from "./HomeStack"
import {createAppContainer, createSwitchNavigator} from "react-navigation"

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: {screen: AuthLoading},
      HomeStack: {screen: HomeStack},
      AuthStack: {screen: Auth}
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
)

export default AppContainer
