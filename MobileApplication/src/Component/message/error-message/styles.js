import {StyleSheet, Platform} from "react-native"
import {moderateScale, WIDTH} from "@src/utilities/scale"

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderLeftWidth: moderateScale(10),
    padding: moderateScale(5),
    alignItems: "center",
    backgroundColor: "white",
    position: "absolute",
    left: 0,
    width: WIDTH,
    ...Platform.select({
      ios: {
        zIndex: 10000
      },
      android: {
        elevation: 10000
      }
    })
  },
  icon: {marginRight: moderateScale(5)}
})

export default styles
