import {StyleSheet, Platform} from "react-native"
import {moderateScale} from "@src/utilities/scale"

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#b9c1ca",
    ...Platform.select({
      ios: {height: moderateScale(51)},
      android: {height: moderateScale(52)}
    }),
    margin: 0,
    padding: 0
  },
  labelContainer: {
    position: "absolute"
  },
  label: {fontSize: moderateScale(16), fontWeight: "bold"},
  input: {
    position: "absolute",
    bottom: moderateScale(3),
    ...Platform.select({
      ios: {
        paddingTop: moderateScale(5),
        paddingBottom: moderateScale(5)
      },
      android: {
        padding: 0
      }
    }),
    paddingLeft: moderateScale(15),
    paddingRight: moderateScale(15),
    margin: 0,
    opacity: 0.9
  },
  border: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: moderateScale(3)
  }
})

export default styles
