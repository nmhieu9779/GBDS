import {StyleSheet} from "react-native"
import {scale} from "@src/utilities"

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: scale.moderateScale(5),
    width: scale.WIDTH - 10,
    marginBottom: scale.moderateScale(10),
    borderRadius: 5
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
    borderRadius: scale.moderateScale(5)
  },
  name: {fontSize: scale.moderateScale(18), fontWeight: "bold", color: "red"},
  infoContainer: {flexDirection: "row", alignItems: "center"}
})

export default styles
