import { combineReducers } from "redux"
import loginReducers from "../LoginScreen/loginReducers"
import registrationReducers from "../RegistrationScreen/registrationReducers"
const allReducers = combineReducers({
  loginReducers,
  registrationReducers
})

export default allReducers
