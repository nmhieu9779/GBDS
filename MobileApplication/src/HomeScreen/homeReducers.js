// import { fromJS } from "immutable"
// import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from "../actions"

initStateLogin = { message: "", status: "", uid: "", reLogin: "" }

const loginReducers = (state = initStateLogin, action) => {
  let newState = fromJS(state).toJS()
  switch (action.type) {
    case LOGIN_SUCCESS:
      newState.status = action.response.status
      break
    case LOGIN_FAILED:
      newState.status = action.response.status
      newState.message = action.response.message
      newState.reLogin = new Date().toString()
      break
    default:
      return state
  }
  return newState
}

export default loginReducers
