import {StyleSheet} from "react-native"
import {moderateScale} from "@src/utilities/scale"

const styles = StyleSheet.create({
  itemInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: moderateScale(7),
    paddingBottom: moderateScale(7),
    marginLeft: moderateScale(10),
    paddingRight: moderateScale(10),
    borderBottomColor: "#E1E8ED",
    borderBottomWidth: moderateScale(0.5)
  },
  icon: {marginRight: moderateScale(10)},
  labelContainer: {flex: 1}
})

export default styles
