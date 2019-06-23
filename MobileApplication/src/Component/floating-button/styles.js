import {StyleSheet} from "react-native"
import {scale} from "@src/utilities"

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  floatingButtonConainer: {
    height: scale.moderateScale(55),
    width: scale.moderateScale(55),
    borderRadius: scale.moderateScale(27.5),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EA4335"
  }
})

export default styles
