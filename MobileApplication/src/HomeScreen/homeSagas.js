import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from "../actions"

import { put, takeLatest, retry } from "redux-saga/effects"
import { Api } from "./loginApi"

function* login(payload) {
  try {
    const response = yield Api.login(payload.payload)
    if (response.status === "success") {
      yield put({ type: LOGIN_SUCCESS, response: response })
    } else {
      yield put({ type: LOGIN_FAILED, response: response })
    }
  } catch (error) {
    console.log(error)
  }
}

export function* watchLogin() {
  yield takeLatest(LOGIN, login)
}
