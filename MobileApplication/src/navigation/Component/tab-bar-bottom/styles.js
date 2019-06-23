import {StyleSheet} from "react-native"
import {scale} from "@src/utilities"

const styles = StyleSheet.create({
  container: {
    width: scale.WIDTH,
    backgroundColor: "#2E75ED",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: scale.moderateScale(5),
    paddingBottom: scale.moderateScale(3)
  },
  btnContainer: {
    flex: 1,
    alignItems: "center"
  },
  label: {
    color: "white"
  }
})

export default styles
