import {StyleSheet} from "react-native"
import {scale} from "@src/utilities"

export default (styles = StyleSheet.create({
  btnAdd: {
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "#ccc",
    borderRadius: scale.moderateScale(5),
    padding: scale.moderateScale(5),
    flexDirection: "row",
    alignItems: "center"
  }
}))
