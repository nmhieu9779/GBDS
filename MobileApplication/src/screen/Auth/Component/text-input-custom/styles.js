import {StyleSheet, Platform} from "react-native"
import {moderateScale} from "@src/utilities/scale"

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    alignItems: "center",
    padding: moderateScale(10)
  },
  icon: {
    marginRight: moderateScale(10)
  },
  input: {
    flex: 1,
    ...Platform.select({android: {padding: 0}})
  }
})

export default styles
