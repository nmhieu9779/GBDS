// import LoginContainer from "../LoginScreen/LoginScreen"
// import QRCodeScreen from "../QRCodeScreen/QRCodeScreen"
// import RegistrationContainer from "../RegistrationScreen/RegistrationScreen"
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  withNavigationFocus,
  createSwitchNavigator
} from "react-navigation"

// const LoginStack = createStackNavigator(
//   {
//     LoginScreen: { screen: LoginContainer },
//     RegistrationScreen: { screen: RegistrationContainer }
//   },
//   {
//     initialRouteName: "LoginScreen",
//     headerMode: "none"
//   }
// )

const AppContainer = createAppContainer(
  createSwitchNavigator({
    // LoginStack: { screen: QRCodeScreen }
  }),
  {
    // initialRouteName: "LoginStack",
    headerMode: "none"
  }
)

export default AppContainer
