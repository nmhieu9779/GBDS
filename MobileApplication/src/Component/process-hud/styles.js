import { StyleSheet } from "react-native"
import constants from "../../Constant"

const styles = StyleSheet.create({
  hud_container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: constants.width,
    height: constants.height,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999
  }
})

export default styles
