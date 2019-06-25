import {StyleSheet} from "react-native"
import {scale} from "@src/utilities"

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "white",
    padding: scale.moderateScale(10),
    margin: scale.moderateScale(5)
  },
  topNameContainer: {marginLeft: scale.moderateScale(5), flex: 1},
  topNameText: {fontSize: scale.moderateScale(20)},
  topNameTextLabel: {color: "rgb(144, 148, 156)"},
  menuContainer: {backgroundColor: "white", margin: scale.moderateScale(5)},
  itemInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: scale.moderateScale(7),
    paddingBottom: scale.moderateScale(7),
    marginLeft: scale.moderateScale(10),
    paddingRight: scale.moderateScale(10),
    borderBottomColor: "#E1E8ED",
    borderBottomWidth: scale.moderateScale(0.5)
  },
  itemInfoLabel: {flex: 1},
  priceText: {fontSize: scale.moderateScale(25)},
  checked: {color: "#1ED760"},
  iconChecked: {marginLeft: scale.moderateScale(3)},
  itemInfoText: {flex: 1, textAlign: "right"},
  iconSocial: {marginRight: scale.moderateScale(10)},
  socialContainer: {flex: 1},
  textManager: {color: "#4285F4"},
  labelContainer: {flex: 1},
  icon: {marginRight: scale.moderateScale(10)},
  modalContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  modalContentContainer: {padding: scale.moderateScale(20), width: (scale.WIDTH * 2) / 3},
  modalInput: {
    width: "100%",
    borderBottomColor: "gray",
    borderBottomWidth: scale.moderateScale(0.5),
    paddingTop: scale.moderateScale(5),
    paddingBottom: scale.moderateScale(5)
  },
  modalBtnContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: scale.moderateScale(5),
    backgroundColor: "#3B5998",
    padding: scale.moderateScale(10),
    marginTop: scale.moderateScale(10)
  },
  modalBtnText: {color: "white", fontWeight: "bold"}
})

export default styles
