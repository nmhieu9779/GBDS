import { StyleSheet } from "react-native"
import { moderateScale, width } from "@src/utilities/scale"

const COLOR = "#133337"

const styles = StyleSheet.create({
  breadcrums_container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#d6d6d6",
    justifyContent: "space-around",
    alignItems: "center",
    width: width,
    height: moderateScale(50)
  },
  crumbContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  line: {
    height: moderateScale(10),
    position: "absolute",
    top: moderateScale(width / 28 - 5),
    flexDirection: "row"
  },
  lengthItem: { flex: 1 },
  activeLineItem: {
    backgroundColor: COLOR
  },
  unActiveLineItem: {
    borderColor: "#d6d6d6",
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  crumbStyle: {
    width: moderateScale(width / 14),
    height: moderateScale(width / 14),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(width / 7),
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
