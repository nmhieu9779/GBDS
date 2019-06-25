import {StyleSheet, Platform} from "react-native"
import {scale} from "@src/utilities"

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "transparent",
    alignItems: "center",
    ...Platform.select({
      ios: {
        height: scale.moderateScale(38)
      },
      android: {height: scale.moderateScale(38)}
    }),
    borderRadius: 0,
    marginBottom: scale.moderateScale(1)
  },
  icon: {
    margin: scale.moderateScale(10)
  },
  title: {
    flex: 1,
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    ...Platform.select({
      ios: {
        fontSize: scale.moderateScale(17)
      },
      android: {fontSize: scale.moderateScale(17)}
    }),
    fontWeight: "bold"
  },
  itemContainer: {
    flexDirection: "row"
  }
})

export default styles
