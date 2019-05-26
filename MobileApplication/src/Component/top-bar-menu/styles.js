import { StyleSheet } from "react-native"
import { moderateScale } from "@src/utilities/scale"

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: moderateScale(56),
    backgroundColor: "white",
    alignItems: "center"
  },
  icon: {
    margin: moderateScale(16)
  },
  title: {
    flex: 1,
    fontSize: moderateScale(24),
    color: "black",
    textAlign: "center",
    textAlignVertical: "center"
  }
})

export default styles
