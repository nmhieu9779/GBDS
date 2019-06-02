import {StyleSheet, Platform} from "react-native"
import {moderateScale} from "@src/utilities/scale"

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#2E75ED",
    alignItems: "center",
    ...Platform.select({
      ios: {
        height: moderateScale(38)
      },
      android: {height: moderateScale(56)}
    }),
    borderBottomColor: "#E9EBEE",
    borderBottomWidth: 1
  },
  icon: {
    margin: moderateScale(10)
  },
  title: {
    flex: 1,
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    ...Platform.select({
      ios: {
        fontSize: moderateScale(17)
      },
      android: {fontSize: moderateScale(19)}
    }),
    fontWeight: "bold"
  },
  itemContainer: {
    flexDirection: "row"
  }
})

export default styles
