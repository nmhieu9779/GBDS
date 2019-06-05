import {fromJS} from "immutable"
import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from "@src/redux/actions"

initStateAuth = {
  loading: false,
  signUpSuccess: false,
  signInSuccess: false
}

const authReducers = (state = initStateAuth, action) => {
  let newState = fromJS(state).toJS()
  switch (action.type) {
    case SIGN_IN:
      newState.signInSuccess = false
      newState.loading = true
      break
    case SIGN_IN_SUCCESS:
      newState.signInSuccess = true
      newState.loading = false
      break
    case SIGN_IN_FAILURE:
      newState.loading = false
      newState.signInSuccess = false
      break
    case SIGN_UP:
      newState.signUpSuccess = false
      newState.loading = true
      break
    case SIGN_UP_SUCCESS:
      newState.signUpSuccess = true
      newState.loading = false
      break
    case SIGN_UP_FAILURE:
      newState.signUpSuccess = false
      newState.loading = false
      break
    default:
      break
  }
  return newState
}

export default authReducers
