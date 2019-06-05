import {StyleSheet} from "react-native"
import {moderateScale} from "@src/utilities/scale"

export default (styles = StyleSheet.create({
  btnAdd: {
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "#ccc",
    borderRadius: moderateScale(5),
    padding: moderateScale(5),
    flexDirection: "row",
    alignItems: "center"
  }
}))
