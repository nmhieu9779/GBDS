import { StyleSheet } from "react-native"
import { moderateScale } from "@src/utilities/scale"

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: moderateScale(40),
    backgroundColor: "white",
    alignItems: "center"
  },
  icon: {
    margin: moderateScale(10)
  },
  title: {
    flex: 1,
    fontSize: moderateScale(20),
    color: "black",
    textAlign: "center",
    textAlignVertical: "center"
  }
})

export default styles
