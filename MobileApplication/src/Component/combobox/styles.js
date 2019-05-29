import {StyleSheet} from "react-native"
import {moderateScale} from "@src/utilities/scale"

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: moderateScale(5)
  },
  labelContainer: {
    flex: 1,
    paddingRight: moderateScale(5)
  }
})

export default styles
