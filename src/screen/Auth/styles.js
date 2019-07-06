import {StyleSheet} from "react-native"
import {scale} from "@src/utilities"

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
    padding: scale.moderateScale(5),
    position: "absolute",
    top: scale.moderateScale(10),
    right: scale.moderateScale(20),
    borderColor: "gray",
    borderWidth: scale.moderateScale(0.5),
    borderRadius: scale.moderateScale(99)
  }
})

export default styles
