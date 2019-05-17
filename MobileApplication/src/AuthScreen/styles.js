import { Platform, StyleSheet } from "react-native"
import constants from "../Constant"

const main = StyleSheet.create({
  container: {
    flex: 1
  },
  background_image: {
    flex: 1,
    justifyContent: "center"
  },
  image_style_background: { opacity: 0.5 }
})

const stylesSignIn = StyleSheet.create({
  input_container: { alignItems: "center", marginBottom: 40 },
  input: {
    width: 0.7 * constants.width + 10,
    borderTopLeftRadius: 15,
    marginBottom: 1
  },
  button_forgot_password: {
    width: 0.7 * constants.width + 10,
    alignItems: "flex-end"
  },
  button_container: { alignItems: "center" },
  button_signIn: {
    width: 0.7 * constants.width + 10,
    marginBottom: 10,
    paddingTop: 15,
    paddingBottom: 15
  },
  social_container: { flexDirection: "row" },
  button_custom: { marginRight: 10 }
})

const stylesSignUp = StyleSheet.create({
  input_container: { alignItems: "center", marginBottom: 40 },
  input: {
    width: 0.7 * constants.width + 10,
    borderTopLeftRadius: 15,
    marginBottom: 1
  },
  button_container: { alignItems: "center" },
  button_signUp: {
    width: 0.7 * constants.width + 10,
    marginBottom: 10,
    paddingTop: 15,
    paddingBottom: 15
  }
})

export default (styles = { main, stylesSignIn, stylesSignUp })
