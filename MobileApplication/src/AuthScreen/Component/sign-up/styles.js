import { StyleSheet } from "react-native"
import { width, moderateScale } from "@src/utilities/scale"

const styles = StyleSheet.create({
  input_container: { alignItems: "center", marginBottom: moderateScale(40) },
  input: {
    width: moderateScale(0.7 * width + 10),
    borderTopLeftRadius: moderateScale(15),
    borderBottomRightRadius: moderateScale(15),
    marginBottom: 1
  },
  button_container: { alignItems: "center" },
  button_signUp: {
    width: moderateScale(0.7 * width + 10),
    marginBottom: moderateScale(10),
    paddingTop: moderateScale(15),
    paddingBottom: moderateScale(15)
  }
})

export default styles
