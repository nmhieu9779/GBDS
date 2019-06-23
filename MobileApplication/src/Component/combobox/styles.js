import {StyleSheet} from "react-native"
import {scale} from "@src/utilities"

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: scale.moderateScale(5)
  },
  labelContainer: {
    flex: 1,
    paddingRight: scale.moderateScale(5)
  }
})

export default styles
