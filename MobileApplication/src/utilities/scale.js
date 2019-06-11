import ExtraDimensions from "react-native-extra-dimensions-android"
import {Dimensions, Platform} from "react-native"

const X_WIDTH = 375
const X_HEIGHT = 812

const XSMAX_WIDTH = 414
const XSMAX_HEIGHT = 896

let isIPhoneX = false

const {width, height} = Dimensions.get("window")

export const HEIGHT = Platform.OS === "android" ? ExtraDimensions.getRealWindowHeight() : height

export const WIDTH = Platform.OS === "android" ? ExtraDimensions.getRealWindowWidth() : width

if (Platform.OS === "ios" && !Platform.isPad && !Platform.isTVOS) {
  isIPhoneX = (WIDTH === X_WIDTH && HEIGHT === X_HEIGHT) || (WIDTH === XSMAX_WIDTH && HEIGHT === XSMAX_HEIGHT)
}

export const STATUS_BAR_HEIGHT =
  Platform.OS === "android" ? ExtraDimensions.getStatusBarHeight() : isIPhoneX ? 44 : 20

const guidelineBaseWidth = 350
const guidelineBaseHeight = 680

export const scale = (size) => (WIDTH / guidelineBaseWidth) * size
export const verticalScale = (size) => (HEIGHT / guidelineBaseHeight) * size
export const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor
