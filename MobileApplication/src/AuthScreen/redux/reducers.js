import { fromJS } from "immutable"
import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from "../../actions"

initStateAuth = {
  isLoading: false,
  signUpSuccess: false,
  signInSuccess: false,
  message: "",
  accessToken: ""
}

const authReducers = (state = initStateAuth, action) => {
  let newState = fromJS(state).toJS()
  switch (action.type) {
    case SIGN_IN:
      newState.isLoading = true
      newState.signInSuccess = false
      newState.signUpSuccess = false
      break
    case SIGN_IN_SUCCESS:
      newState.isLoading = false
      newState.signInSuccess = true
      break
    case SIGN_IN_FAILURE:
      newState.isLoading = false
      break
    case SIGN_UP:
      newState.isLoading = true
      newState.signUpSuccess = false
      newState.signInSuccess = false
      break
    case SIGN_UP_SUCCESS:
      newState.isLoading = false
      newState.signUpSuccess = true
      break
    case SIGN_UP_FAILURE:
      newState.isLoading = false
      break
    default:
      break
  }
  return newState
}

export default authReducers
