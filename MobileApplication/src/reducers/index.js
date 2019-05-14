import { combineReducers } from "redux"
import authReducers from "../AuthScreen/authReducers"
import addressReducers from "../Component/AddressInput/addressReducers"
const allReducers = combineReducers({
  authReducers,
  addressReducers
})

export default allReducers
