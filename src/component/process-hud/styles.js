import {StyleSheet, Platform} from "react-native"
import {scale} from "@src/utilities"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      android: {
        elevation: 10
      },
      ios: {zIndex: 10}
    })
  },
  indicator: {
    width: scale.moderateScale(90),
    height: scale.moderateScale(90),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: scale.moderateScale(12),
    backgroundColor: "rgba(0, 0, 0, 0.35)"
  },
  loadingText: {
    marginTop: scale.moderateScale(5),
    color: "white"
  }
})

export default styles
