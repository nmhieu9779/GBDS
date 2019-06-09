import {StyleSheet} from "react-native"
import {moderateScale, width} from "@src/utilities/scale"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  messConatiner: {
    width: moderateScale(width - width * 0.25)
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
  },
  iconClose: {
    position: "absolute",
    top: moderateScale(5),
    right: moderateScale(5)
  }
})

export default styles
