import {StyleSheet} from "react-native"
import {scale} from "@src/utilities"

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  avatarContainer: {
    flex: 1,
    alignItems: "center"
  },
  infoContainer: {
    alignItems: "center"
  },
  birthdateInputItemContainer: {
    flexDirection: "row",
    marginLeft: scale.moderateScale(15)
  },
  inputBirthdate: {
    padding: scale.moderateScale(5),
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: scale.moderateScale(5),
    width: scale.moderateScale(100)
  },
  labelBirthdate: {
    fontWeight: "bold",
    fontSize: scale.moderateScale(16),
    marginBottom: scale.moderateScale(10)
  },
  birthdateContainer: {
    width: scale.WIDTH - scale.moderateScale(10),
    marginBottom: scale.moderateScale(5)
  },
  btnSaveContainer: {
    width: scale.WIDTH,
    padding: scale.moderateScale(15),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#24C8EC"
  },
  btnSaveText: {
    fontWeight: "bold",
    color: "white",
    fontSize: scale.moderateScale(20)
  },
  genderItemContainer: {
    padding: scale.moderateScale(5),
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: scale.moderateScale(5),
    width: scale.moderateScale(100),
    justifyContent: "center",
    alignItems: "center"
  }
})

export default styles
