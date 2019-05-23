import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    height: "20%",
    width: "70%",
    position: "absolute",
    top: "40%",
    left: "15%",
    borderRadius: 10
  },
  modalTitle: { fontWeight: "bold", fontSize: 20 },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  modalContent: { flex: 1 },
  modalButton: {
    flex: 1,
    backgroundColor: "#E9EBEE",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    borderColor: "#ccc",
    borderWidth: 0.5
  }
})

export default styles
