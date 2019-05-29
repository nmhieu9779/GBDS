import {fromJS} from "immutable"
import {SIGN_IN, SIGN_IN_SUCCESS, SIGN_UP, SIGN_UP_SUCCESS} from "../../redux/actions"

initStateAuth = {
  signUpSuccess: false,
  signInSuccess: false
}

const authReducers = (state = initStateAuth, action) => {
  let newState = fromJS(state).toJS()
  switch (action.type) {
    case SIGN_IN:
      newState.signInSuccess = false
      break
    case SIGN_IN_SUCCESS:
      newState.signInSuccess = true
      break
    case SIGN_UP:
      newState.signUpSuccess = false
      break
    case SIGN_UP_SUCCESS:
      newState.signUpSuccess = true
      break
    default:
      break
  }
  return newState
}

export default authReducers
