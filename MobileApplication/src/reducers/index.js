import { combineReducers } from "redux"
import authReducers from "../AuthScreen/redux/reducers"
import addressReducers from "../Component/address-input/redux/reducers"
import processHudReducers from "../Component/process-hud/redux/reducers"
import typeProductReducers from "../Component/type-product/redux/reducers"

const allReducers = combineReducers({
  authReducers,
  addressReducers,
  processHudReducers,
  typeProductReducers
})

export default allReducers
