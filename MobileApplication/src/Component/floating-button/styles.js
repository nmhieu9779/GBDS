import {StyleSheet} from "react-native"
import {moderateScale} from "@src/utilities/scale"

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: moderateScale(20),
    right: moderateScale(20),
    backgroundColor: "white",
    borderRadius: moderateScale(30),
    zIndex: 999
  },
  floatingButtonConainer: {
    height: moderateScale(50),
    width: moderateScale(50),
    borderRadius: moderateScale(25),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#34A853",
    margin: moderateScale(5)
  }
})

export default styles
