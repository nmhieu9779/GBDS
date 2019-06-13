import {StyleSheet} from "react-native"
import {moderateScale} from "@src/utilities/scale"

const styles = StyleSheet.create({
  bottomContainer: {
    borderTopWidth: 0.4,
    borderTopColor: "#606770",
    paddingTop: moderateScale(10),
    flexDirection: "row"
  },
  btnBottom: {
    flexDirection: "row",
    flex: 1,
    paddingLeft: moderateScale(8),
    paddingRight: moderateScale(8)
  },
  itemsBtn: {
    flexDirection: "row",
    padding: moderateScale(8),
    paddingTop: moderateScale(6),
    alignItems: "center",
    justifyContent: "center"
  },
  itemsBtnIcon: {
    marginRight: moderateScale(4)
  }
})

export default styles
