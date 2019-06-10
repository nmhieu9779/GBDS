import {StyleSheet} from "react-native"
import {moderateScale, WIDTH} from "@src/utilities/scale"

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
    marginLeft: moderateScale(15)
  },
  inputBirthdate: {
    padding: moderateScale(5),
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: moderateScale(5),
    width: moderateScale(100)
  },
  labelBirthdate: {
    fontWeight: "bold",
    fontSize: moderateScale(16),
    marginBottom: moderateScale(10)
  },
  birthdateContainer: {
    width: WIDTH - moderateScale(10),
    marginBottom: moderateScale(5)
  },
  btnSaveContainer: {
    width: WIDTH,
    padding: moderateScale(15),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#24C8EC"
  },
  btnSaveText: {
    fontWeight: "bold",
    color: "white",
    fontSize: moderateScale(20)
  },
  genderItemContainer: {
    padding: moderateScale(5),
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: moderateScale(5),
    width: moderateScale(100),
    justifyContent: "center",
    alignItems: "center"
  }
})

export default styles
