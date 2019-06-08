import {StyleSheet} from "react-native"
import {moderateScale} from "@src/utilities/scale"

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background_image: {
    flex: 1,
    justifyContent: "center"
  },
  image_style_background: {opacity: 0.5},
  btnSkipLogin: {
    padding: moderateScale(5),
    position: "absolute",
    top: moderateScale(10),
    right: moderateScale(20),
    borderColor: "gray",
    borderWidth: moderateScale(0.5),
    borderRadius: moderateScale(99)
  }
})

export default styles
