import {StyleSheet} from "react-native"
import {scale} from "@src/utilities"

const styles = StyleSheet.create({
  container: {
    width: scale.WIDTH,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: scale.moderateScale(5),
    paddingBottom: scale.moderateScale(3),
    borderTopColor: "#B3B7BD",
    borderTopWidth: scale.moderateScale(0.5)
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
