import { StyleSheet } from "react-native"
import { moderateScale } from "@src/utilities/scale"

const styles = StyleSheet.create({
  boxShadow: {
    elevation: 2,
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 1,
    shadowOffset: {
      height: moderateScale(0.5),
      width: 0
    }
  }
})

export default styles
