import { StyleSheet } from "react-native"
import constants from "../../Constant"

const COLOR = "#e52b50"

const styles = StyleSheet.create({
  breadcrums_container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#d6d6d6",
    justifyContent: "space-around",
    alignItems: "center",
    width: constants.width,
    height: 50
  },
  crumbContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  line: {
    height: 10,
    position: "absolute",
    top: constants.width / 28 - 5,
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
    width: constants.width / 14,
    height: constants.width / 14,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: constants.width / 7,
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
    fontSize: 20
  },
  activeCrumbTextStyle: {
    color: "white",
    fontWeight: "bold"
  }
})

export default styles
