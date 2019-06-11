import {StyleSheet} from "react-native"
import {moderateScale} from "@src/utilities/scale"

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  floatingButtonConainer: {
    height: moderateScale(55),
    width: moderateScale(55),
    borderRadius: moderateScale(27.5),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EA4335"
  }
})

export default styles
