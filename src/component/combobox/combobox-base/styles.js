import {StyleSheet} from "react-native"
import {scale} from "@src/utilities"

const styles = StyleSheet.create({
  modalContainer: {justifyContent: "flex-end", margin: 0},
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#ccc",
    borderWidth: 0.5,
    borderRadius: 5
  },
  selected: {
    flex: 1,
    padding: scale.moderateScale(5),
    paddingLeft: scale.moderateScale(10)
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderLeftColor: "#ccc",
    borderLeftWidth: 0.5,
    padding: scale.moderateScale(5)
  },
  container_item: {
    backgroundColor: "white"
  },
  itemContainer_item: {
    height: scale.moderateScale(40),
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 0.5
  },
  header_item: {
    opacity: 0.8,
    fontSize: scale.moderateScale(20)
  },
  itemLabel_item: {
    fontSize: scale.moderateScale(18),
    color: "blue"
  }
})

export default styles
