import {StyleSheet} from "react-native"
import {moderateScale, WIDTH} from "@src/utilities/scale"

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: moderateScale(5),
    width: WIDTH - 10,
    marginBottom: moderateScale(10),
    borderRadius: 1
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textInput: {
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 0,
    textAlign: "center",
    borderRadius: moderateScale(5)
  },
  name: {fontSize: moderateScale(18), fontWeight: "bold", color: "red"},
  infoContainer: {flexDirection: "row", alignItems: "center"}
})

export default styles
