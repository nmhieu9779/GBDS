import {StyleSheet} from "react-native"
import {scale} from "@src/utilities"

const styles = StyleSheet.create({
  bottomContainer: {
    borderTopWidth: 0.4,
    borderTopColor: "#606770",
    paddingTop: scale.moderateScale(10),
    flexDirection: "row"
  },
  btnBottom: {
    flexDirection: "row",
    flex: 1,
    paddingLeft: scale.moderateScale(8),
    paddingRight: scale.moderateScale(8),
    justifyContent: "center"
  },
  itemsBtn: {
    flexDirection: "row",
    padding: scale.moderateScale(8),
    paddingTop: scale.moderateScale(6),
    alignItems: "center",
    justifyContent: "center"
  },
  itemsBtnIcon: {
    marginRight: scale.moderateScale(4)
  }
})

export default styles
