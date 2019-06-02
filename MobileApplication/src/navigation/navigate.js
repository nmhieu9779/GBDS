import Auth from "@src/screen/Auth"
import AuthLoading from "@src/screen/AuthLoading"
import HomeStack from "./HomeStack"
import {createAppContainer, createSwitchNavigator} from "react-navigation"

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      HomeStack: {screen: HomeStack},
      AuthLoading: {screen: AuthLoading},
      AuthStack: {screen: Auth}
    },
    {
      initialRouteName: "HomeStack"
    }
  )
)

export default AppContainer
