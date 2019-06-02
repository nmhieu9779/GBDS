import {StyleSheet} from "react-native"
import {moderateScale, width} from "@src/utilities/scale"

const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: "#2E75ED",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: moderateScale(5),
    paddingBottom: moderateScale(3)
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
