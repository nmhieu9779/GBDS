import {StyleSheet} from "react-native"
import {scale} from "@src/utilities"

const styles = StyleSheet.create({
  input_container: {alignItems: "center", marginBottom: scale.moderateScale(40)},
  input: {
    width: scale.moderateScale(0.7 * scale.WIDTH + 10),
    borderRadius: scale.moderateScale(5),
    marginBottom: 1
  },
  button_container: {alignItems: "center"},
  button_signUp: {
    width: scale.moderateScale(0.7 * scale.WIDTH + 10),
    marginBottom: scale.moderateScale(10),
    paddingTop: scale.moderateScale(15),
    paddingBottom: scale.moderateScale(15)
  }
})

export default styles
