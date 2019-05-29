import {StyleSheet} from "react-native"
import {moderateScale} from "@src/utilities/scale"

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "#ccc",
    borderRadius: moderateScale(5),
    padding: moderateScale(5),
    flexDirection: "row",
    alignItems: "center",
    marginBottom: moderateScale(5)
  },
  textInput: {
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 0,
    textAlign: "center",
    borderRadius: moderateScale(5)
  },
  name: {fontSize: moderateScale(20), fontWeight: "bold", color: "red"}
})

export default styles
