import {StyleSheet} from "react-native"
import {width, height} from "@src/utilities/scale"

const styles = StyleSheet.create({
  hud_container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
    height: height,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999
  }
})

export default styles
