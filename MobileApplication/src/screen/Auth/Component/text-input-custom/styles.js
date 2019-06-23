import {StyleSheet, Platform} from "react-native"
import {scale} from "@src/utilities"

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    alignItems: "center",
    padding: scale.moderateScale(10)
  },
  icon: {
    marginRight: scale.moderateScale(10)
  },
  input: {
    flex: 1,
    ...Platform.select({android: {padding: 0}})
  }
})

export default styles
