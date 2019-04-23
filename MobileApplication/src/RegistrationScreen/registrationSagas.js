import {
  REGISTRATION,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED
} from "../actions"

import { put, takeLatest, retry } from "redux-saga/effects"
import { Api } from "./registrationApi"

function* registration(payload) {
  try {
    const response = yield Api.registration(payload.payload)
    if (response.status === "success") {
      yield put({ type: REGISTRATION_SUCCESS, response: response })
    } else {
      yield put({ type: REGISTRATION_FAILED, response: response })
    }
  } catch (error) {
    console.log(error)
  }
}

export function* watchRegistration() {
  yield takeLatest(REGISTRATION, registration)
}
