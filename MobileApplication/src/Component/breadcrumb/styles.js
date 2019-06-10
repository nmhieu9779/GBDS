import {StyleSheet} from "react-native"
import {moderateScale, WIDTH} from "@src/utilities/scale"

const COLOR = "#2E75ED"

const styles = StyleSheet.create({
  breadcrums_container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#d6d6d6",
    justifyContent: "space-around",
    alignItems: "center",
    width: WIDTH,
    height: moderateScale(50)
  },
  crumbContainer: {flex: 1, justifyContent: "center", alignItems: "center"},
  line: {
    height: moderateScale(10),
    position: "absolute",
    top: moderateScale(WIDTH / 28 - 5),
    flexDirection: "row"
  },
  lengthItem: {flex: 1},
  activeLineItem: {
    backgroundColor: COLOR
  },
  unActiveLineItem: {
    borderColor: "#d6d6d6",
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  crumbStyle: {
    width: moderateScale(WIDTH / 14),
    height: moderateScale(WIDTH / 14),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(WIDTH / 7),
    backgroundColor: "white"
  },
  activeCrumbStyle: {
    backgroundColor: COLOR
  },
  unActiveCrumbStyle: {
    borderColor: "#d6d6d6",
    borderWidth: 1
  },
  crumbTextStyle: {
    color: COLOR,
    fontSize: moderateScale(20)
  },
  activeCrumbTextStyle: {
    color: "white",
    fontWeight: "bold"
  }
})

export default styles
