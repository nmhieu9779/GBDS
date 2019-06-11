import {StyleSheet} from "react-native"
import {moderateScale} from "@src/utilities/scale"

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  typeContainer: {
    backgroundColor: "white",
    borderRadius: moderateScale(5),
    padding: moderateScale(5),
    alignItems: "center"
  },
  modalTitle: {
    fontWeight: "bold",
    fontSize: moderateScale(20),
    marginBottom: moderateScale(20)
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  modalButton: {
    backgroundColor: "#E9EBEE",
    padding: moderateScale(10),
    borderRadius: 5,
    borderColor: "#ccc",
    borderWidth: 0.5
  },
  textBtn: {
    textAlign: "center",
    fontSize: moderateScale(14)
  }
})

export default styles
