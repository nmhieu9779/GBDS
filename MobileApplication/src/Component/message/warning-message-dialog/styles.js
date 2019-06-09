import {StyleSheet, Platform} from "react-native"
import {moderateScale, height, width} from "@src/utilities/scale"

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    position: "absolute",
    left: 0,
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        zIndex: 10000
      },
      android: {
        elevation: 10000
      }
    })
  },
  messConatiner: {
    width: moderateScale(width - width * 0.25),
    borderRadius: moderateScale(5),
    borderColor: "gray",
    borderWidth: 0.5
  },
  btnContainer: {
    paddingTop: moderateScale(20),
    paddingBottom: moderateScale(20),
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3822D",
    borderBottomLeftRadius: moderateScale(5),
    borderBottomRightRadius: moderateScale(5)
  },
  btnText: {
    fontWeight: "bold",
    color: "white",
    fontSize: moderateScale(20)
  },
  content: {
    padding: moderateScale(10),
    backgroundColor: "white"
  },
  topContainer: {
    backgroundColor: "#F3822D",
    flexDirection: "row",
    alignItems: "center",
    borderTopLeftRadius: moderateScale(5),
    borderTopRightRadius: moderateScale(5)
  },
  icon: {
    margin: moderateScale(5)
  }
})

export default styles
