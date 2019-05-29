import {StyleSheet} from "react-native"
import {moderateScale} from "@src/utilities/scale"

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#ccc",
    borderWidth: 0.5,
    borderRadius: 5
  },
  selected: {
    flex: 1,
    padding: moderateScale(5),
    paddingLeft: moderateScale(10)
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderLeftColor: "#ccc",
    borderLeftWidth: 0.5,
    padding: moderateScale(5)
  },
  container_item: {
    backgroundColor: "white"
  },
  area_tranparent_item: {
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    flex: 1
  },
  itemContainer_item: {
    height: moderateScale(40),
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 0.5
  },
  header_item: {
    opacity: 0.8,
    fontSize: moderateScale(20)
  },
  itemLabel_item: {
    fontSize: moderateScale(18),
    color: "blue"
  }
})

export default styles
