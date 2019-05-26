import { StyleSheet } from "react-native"
import { width } from "@src/utilities/scale"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  containerCombobox: {
    width: width
  },
  combobox: { flex: 2 }
})

export default styles
