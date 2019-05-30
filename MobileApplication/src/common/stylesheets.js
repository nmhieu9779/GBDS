import {moderateScale} from "@src/utilities/scale"
import {Platform} from "react-native"

const stylesheets = {
  boxShadow: {
    shadowOffset: {
      width: 0,
      height: moderateScale(1)
    },
    shadowOpacity: 0.2,
    ...Platform.select({
      android: {
        elevation: 1
      }
    })
  }
}

export default stylesheets
