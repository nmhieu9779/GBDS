import Toast from "react-native-toast-native"
import {Platform} from "react-native"
const style = {
  width: 300,
  fontSize: 15,
  lineHeight: 2,
  lines: 4,
  borderRadius: 15,
  fontWeight: "bold",
  yOffset: 40
}

export const showToast = (message, color, backgroundColor) =>
  Toast.show(message || " ", Toast.SHORT, Toast.TOP, {
    ...style,
    color: color,
    backgroundColor: backgroundColor
  })
