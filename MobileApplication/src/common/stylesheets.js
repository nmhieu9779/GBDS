import {scale} from "@src/utilities"
import {Platform} from "react-native"

const stylesheets = {
  boxShadow: {
    shadowOffset: {
      width: 0,
      height: scale.moderateScale(1)
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
