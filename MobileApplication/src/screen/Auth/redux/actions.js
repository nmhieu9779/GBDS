import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from "@src/redux/actions"

export const signIn = (payload) => ({
  type: SIGN_IN,
  payload
})

export const signInSuccess = () => ({
  type: SIGN_IN_SUCCESS
})

export const signInFailure = () => ({
  type: SIGN_IN_FAILURE
})

export const signUp = (payload) => ({
  type: SIGN_UP,
  payload
})

export const signUpSuccess = () => ({
  type: SIGN_UP_SUCCESS
})

export const signUpFailure = () => ({
  type: SIGN_UP_FAILURE
})
