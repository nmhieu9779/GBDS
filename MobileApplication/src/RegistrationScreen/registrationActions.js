import {
  REGISTRATION,
  REGISTRATION_FAILED,
  REGISTRATION_SUCCESS
} from "../actions"

export const registrationAction = payload => ({
  type: REGISTRATION,
  payload
})
export const registrationSuccessAction = payload => ({
  type: REGISTRATION_SUCCESS,
  payload
})
export const registrationFailedAction = payload => ({
  type: REGISTRATION_FAILED,
  payload
})
