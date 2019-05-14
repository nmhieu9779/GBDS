import { combineReducers } from "redux"
import authReducers from "../AuthScreen/authReducers"
import addressReducers from "../Component/AddressInput/addressReducers"
import processHudReducers from "../Component/ProcessHUD/processHudReducers"

const allReducers = combineReducers({
  authReducers,
  addressReducers,
  processHudReducers
})

export default allReducers
