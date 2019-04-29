import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from "../actions"

import { put, takeLatest, retry } from "redux-saga/effects"
import { Api } from "./authApi"

function* signIn(payload) {
  try {
    const response = yield Api.signIn(payload.payload)
    if (response.isSuccess) {
      yield put({ type: SIGN_IN_SUCCESS, response: response })
    } else {
      yield put({ type: SIGN_IN_FAILURE, response: response })
    }
  } catch (error) {
    yield put({ type: SIGN_IN_FAILURE })
  }
}

function* signUp(payload) {
  try {
    const response = yield Api.signUp(payload.payload)
    if (response.isSuccess) {
      yield put({ type: SIGN_UP_SUCCESS, response: response })
    } else {
      yield put({ type: SIGN_UP_FAILURE, response: response })
    }
  } catch (error) {
    yield put({ type: SIGN_UP_FAILURE })
  }
}

export function* watchAuth() {
  yield takeLatest(SIGN_IN, signIn)
  yield takeLatest(SIGN_UP, signUp)
}
