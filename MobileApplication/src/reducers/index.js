import { combineReducers } from "redux"
import authReducers from "../AuthScreen/authReducers"
import addressReducers from "../Component/address-input/redux/addressReducers"
import processHudReducers from "../Component/process-hud/processHudReducers"
import typeProductReducers from "../Component/type-product/redux/typeProductReducers"

const allReducers = combineReducers({
  authReducers,
  addressReducers,
  processHudReducers,
  typeProductReducers
})

export default allReducers
