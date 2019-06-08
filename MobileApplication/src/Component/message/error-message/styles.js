import {StyleSheet} from "react-native"
import {moderateScale, width} from "@src/utilities/scale"
import stylesheets from "@src/common/stylesheets"

const styles = StyleSheet.create({
  container: {
    ...stylesheets.boxShadow,
    flexDirection: "row",
    borderLeftWidth: moderateScale(10),
    padding: moderateScale(5),
    alignItems: "center",
    backgroundColor: "white",
    position: "absolute",
    left: 0,
    width: width,
    zIndex: 10000
  },
  icon: {marginRight: moderateScale(5)}
})

export default styles
