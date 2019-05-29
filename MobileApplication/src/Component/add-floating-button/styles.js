import { StyleSheet, Platform } from "react-native"
import { moderateScale, width } from "@src/utilities/scale"

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: moderateScale(5),
    marginLeft: moderateScale(5),
    marginRight: moderateScale(5),
    position: "absolute",
    top: "40%",
    borderRadius: moderateScale(10)
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
  modalContent: { flex: 1 },
  modalButton: {
    flex: 1,
    backgroundColor: "#E9EBEE",
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(10),
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
