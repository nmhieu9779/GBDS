import {StyleSheet} from "react-native"
import {scale} from "@src/utilities"

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  messConatiner: {
    width: scale.moderateScale(scale.WIDTH - scale.WIDTH * 0.25)
  },
  btnContainer: {
    paddingTop: scale.moderateScale(20),
    paddingBottom: scale.moderateScale(20),
    paddingLeft: scale.moderateScale(10),
    paddingRight: scale.moderateScale(10),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3822D",
    borderBottomLeftRadius: scale.moderateScale(5),
    borderBottomRightRadius: scale.moderateScale(5)
  },
  btnText: {
    fontWeight: "bold",
    color: "white",
    fontSize: scale.moderateScale(20)
  },
  content: {
    padding: scale.moderateScale(10),
    backgroundColor: "white"
  },
  topContainer: {
    backgroundColor: "#F3822D",
    flexDirection: "row",
    alignItems: "center",
    borderTopLeftRadius: scale.moderateScale(5),
    borderTopRightRadius: scale.moderateScale(5)
  },
  icon: {
    margin: scale.moderateScale(5)
  }
})

export default styles
