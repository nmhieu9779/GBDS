import {StyleSheet, Platform} from "react-native"
import {scale} from "@src/utilities"

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#b9c1ca",
    ...Platform.select({
      ios: {height: scale.moderateScale(51)},
      android: {height: scale.moderateScale(52)}
    }),
    margin: 0,
    padding: 0
  },
  labelContainer: {
    position: "absolute"
  },
  label: {fontSize: scale.moderateScale(16), fontWeight: "bold"},
  input: {
    position: "absolute",
    bottom: scale.moderateScale(3),
    ...Platform.select({
      ios: {
        paddingTop: scale.moderateScale(5),
        paddingBottom: scale.moderateScale(5)
      },
      android: {
        padding: 0
      }
    }),
    paddingLeft: scale.moderateScale(15),
    paddingRight: scale.moderateScale(15),
    margin: 0,
    opacity: 0.9
  },
  border: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: scale.moderateScale(1)
  }
})

export default styles
