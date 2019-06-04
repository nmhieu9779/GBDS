import {StyleSheet} from "react-native"
import {moderateScale} from "@src/utilities/scale"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9DDE0"
  },
  contentContainerStyle: {},
  avatar: {
    borderRadius: moderateScale(20),
    width: moderateScale(40),
    height: moderateScale(40),
    overflow: "hidden"
  },
  itemInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 7,
    paddingBottom: 7,
    marginLeft: 10,
    paddingRight: 10,
    borderBottomColor: "#E1E8ED",
    borderBottomWidth: 0.5
  }
})

export default styles
