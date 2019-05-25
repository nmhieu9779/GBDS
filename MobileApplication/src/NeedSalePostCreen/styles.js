import { StyleSheet, Platform } from "react-native"
import constants from "../Constant"

export const styles_main = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  item: {
    width: constants.width,
    ...Platform.select({
      ios: {
        height: constants.height - 126
      },
      android: {
        height: constants.height - 146
      }
    })
  }
})

export const styles_step1 = StyleSheet.create({
  contentContainerStyle: { alignItems: "center" }
})

export const styles_step2 = StyleSheet.create({
  contentContainerStyle: { alignItems: "center" },
  labelTextInputCustomStyle: {
    color: "red"
  },
  containerTextInputCustom: {
    width: constants.width - 10
  },
  infoPostLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10
  },
  infoPostContainer: { margin: 10 },
  infoPostTextInput: {
    height: constants.width / 2,
    width: constants.width - 10,
    margin: 10,
    padding: 10,
    borderWidth: 0.5,
    borderColor: "#ccc",
    borderRadius: 10
  }
})

export const styles_step3 = StyleSheet.create({
  container: { flex: 1 },
  contentContainerStyle: { alignItems: "center" },
  textInputCustomContainer: {
    width: constants.width - 10,
    marginBottom: 5
  }
})
