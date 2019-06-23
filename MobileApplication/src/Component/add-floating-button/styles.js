import {StyleSheet} from "react-native"
import {scale} from "@src/utilities"

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  typeContainer: {
    backgroundColor: "white",
    borderRadius: scale.moderateScale(5),
    padding: scale.moderateScale(5),
    alignItems: "center"
  },
  modalTitle: {
    fontWeight: "bold",
    fontSize: scale.moderateScale(20),
    marginBottom: scale.moderateScale(20)
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  modalButton: {
    backgroundColor: "#E9EBEE",
    padding: scale.moderateScale(10),
    borderRadius: 5,
    borderColor: "#ccc",
    borderWidth: 0.5
  },
  textBtn: {
    textAlign: "center",
    fontSize: scale.moderateScale(14)
  }
})

export default styles
