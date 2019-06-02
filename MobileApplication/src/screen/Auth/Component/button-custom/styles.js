import {StyleSheet} from "react-native"
import {moderateScale} from "@src/utilities/scale"

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: moderateScale(10),
    borderColor: "gray",
    borderWidth: 0.5
  },
  text: {fontWeight: "bold"}
})

export default styles
