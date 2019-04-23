import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from "../actions"

export const loginAction = payload => ({
  type: LOGIN,
  payload
})
export const loginSuccessAction = payload => ({
  type: LOGIN_SUCCESS,
  payload
})
export const loginFailedAction = payload => ({
  type: LOGIN_FAILED,
  payload
})
