import {StyleSheet, Platform} from "react-native"
import {moderateScale} from "@src/utilities/scale"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    ...Platform.select({
      android: {
        elevation: 50
      }
    })
  },
  indicator: {
    width: moderateScale(90),
    height: moderateScale(90),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(12),
    backgroundColor: "rgba(0, 0, 0, 0.35)"
  },
  loadingText: {
    marginTop: moderateScale(5),
    color: "white"
  }
})

export default styles
