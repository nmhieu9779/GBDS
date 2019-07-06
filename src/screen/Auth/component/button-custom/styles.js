import {StyleSheet} from "react-native"
import {scale} from "@src/utilities"

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: scale.moderateScale(10),
    borderColor: "gray",
    borderWidth: 0.5
  },
  text: {fontWeight: "bold"}
})

export default styles
