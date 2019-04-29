import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from "../actions"

export const signInAction = payload => ({
  type: SIGN_IN,
  payload
})

export const signInSuccessAction = payload => ({
  type: SIGN_IN_SUCCESS,
  payload
})
export const signInFailureAction = payload => ({
  type: SIGN_IN_FAILURE,
  payload
})
export const signUpAction = payload => ({
  type: SIGN_UP,
  payload
})
export const signUpSuccessAction = payload => ({
  type: SIGN_UP_SUCCESS,
  payload
})
export const signUpFailureAction = payload => ({
  type: SIGN_IN_FAILURE,
  payload
})
