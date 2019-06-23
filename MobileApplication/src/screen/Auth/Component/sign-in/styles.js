import {StyleSheet} from "react-native"
import {scale} from "@src/utilities"

const styles = StyleSheet.create({
  input_container: {alignItems: "center", marginBottom: 40},
  input: {
    width: scale.moderateScale(0.7 * scale.WIDTH + 10),
    borderTopLeftRadius: scale.moderateScale(15),
    borderBottomRightRadius: scale.moderateScale(15),
    marginBottom: 1
  },
  button_forgot_password: {
    width: scale.moderateScale(0.7 * scale.WIDTH + 10),
    alignItems: "flex-end"
  },
  button_container: {alignItems: "center"},
  button_signIn: {
    width: scale.moderateScale(0.7 * scale.WIDTH + 10),
    marginBottom: scale.moderateScale(10),
    paddingTop: scale.moderateScale(15),
    paddingBottom: scale.moderateScale(15)
  },
  social_container: {flexDirection: "row"},
  button_custom: {marginRight: scale.moderateScale(10)},
  or: {marginBottom: scale.moderateScale(10)}
})

export default styles
