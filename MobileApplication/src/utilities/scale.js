import ExtraDimensions from "react-native-extra-dimensions-android"

export const HEIGHT = ExtraDimensions.getRealWindowHeight()

export const WIDTH = ExtraDimensions.getRealWindowWidth()

export const STATUS_BAR_HEIGHT = ExtraDimensions.getStatusBarHeight()

export const SOFT_MENU_BAR_HEIGHT = ExtraDimensions.getSoftMenuBarHeight()

export const SMART_BAR_HEIGHT = ExtraDimensions.getSmartBarHeight()

export const SOFT_MENU_BAR_ENABLED = ExtraDimensions.isSoftMenuBarEnabled()

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350
const guidelineBaseHeight = 680

export const scale = (size) => (WIDTH / guidelineBaseWidth) * size
export const verticalScale = (size) => (HEIGHT / guidelineBaseHeight) * size
export const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor
