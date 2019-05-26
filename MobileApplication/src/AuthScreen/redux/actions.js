import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_UP,
  SIGN_UP_SUCCESS
} from "../../redux/actions"

export const signInAction = payload => ({
  type: SIGN_IN,
  payload
})

export const signInSuccessAction = payload => ({
  type: SIGN_IN_SUCCESS
})

export const signUpAction = payload => ({
  type: SIGN_UP,
  payload
})

export const signUpSuccessAction = payload => ({
  type: SIGN_UP_SUCCESS
})
