import {StyleSheet} from "react-native"
import {scale} from "@src/utilities"

const COLOR = "#2E75ED"

const styles = StyleSheet.create({
  breadcrums_container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#d6d6d6",
    justifyContent: "space-around",
    alignItems: "center",
    width: scale.WIDTH,
    height: scale.moderateScale(50)
  },
  crumbContainer: {flex: 1, justifyContent: "center", alignItems: "center"},
  line: {
    height: scale.moderateScale(10),
    position: "absolute",
    top: scale.moderateScale(scale.WIDTH / 28 - 5),
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
    width: scale.moderateScale(scale.WIDTH / 14),
    height: scale.moderateScale(scale.WIDTH / 14),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: scale.moderateScale(scale.WIDTH / 7),
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
    fontSize: scale.moderateScale(20)
  },
  activeCrumbTextStyle: {
    color: "white",
    fontWeight: "bold"
  }
})

export default styles
