import {StyleSheet} from "react-native"
import {moderateScale} from "@src/utilities/scale"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9DDE0"
  },
  avatar: {
    borderRadius: moderateScale(20),
    width: moderateScale(40),
    height: moderateScale(40),
    overflow: "hidden"
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "white",
    padding: moderateScale(10)
  },
  topNameContainer: {marginLeft: moderateScale(5)},
  topNameText: {fontSize: moderateScale(20)},
  topNameTextLabel: {color: "rgb(144, 148, 156)"},
  menuContainer: {backgroundColor: "white", marginTop: moderateScale(5)},
  itemInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: moderateScale(7),
    paddingBottom: moderateScale(7),
    marginLeft: moderateScale(10),
    paddingRight: moderateScale(10),
    borderBottomColor: "#E1E8ED",
    borderBottomWidth: moderateScale(0.5)
  },
  itemInfoLabel: {flex: 1},
  priceText: {fontSize: moderateScale(25)},
  checked: {color: "#1ED760"},
  iconChecked: {marginLeft: moderateScale(3)},
  itemInfoText: {flex: 1},
  iconSocial: {marginRight: moderateScale(10)},
  socialContainer: {flex: 1},
  textManager: {color: "#4285F4"}
})

export default styles
