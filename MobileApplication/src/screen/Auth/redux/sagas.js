import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SHOW_MESSAGE
} from "@src/redux/actions"
import {put, takeLatest, call} from "redux-saga/effects"
import {Api} from "./api"
import {setItemAsyncStorage} from "@src/utilities/asyncStorage"

function* signIn(payload) {
  const response = yield Api.signIn(payload.payload)
  if (response.status === 200) {
    const data = {
      accessToken: response.data.access_token,
      refreshToken: response.data.refresh_token,
      tokenType: response.data.token_type,
      userId: response.data.user_id,
      email: payload.payload.email.toLowerCase()
    }
    yield setItemAsyncStorage({keyName: "USER_OAUTH", data: data})
    yield setItemAsyncStorage({keyName: "IS_SKIP_SIGNIN", data: true})
    yield setItemAsyncStorage({keyName: "IS_SIGNIN", data: true})
    yield put({type: SIGN_IN_SUCCESS})
  } else {
    yield put({type: SIGN_IN_FAILURE})
    yield put({type: SHOW_MESSAGE})
  }
}

function* signUp(payload) {
  const response = yield Api.signUp(payload.payload)
  if (response.status === 201) {
    yield put({type: SIGN_UP_SUCCESS})
  } else {
    yield put({type: SIGN_UP_FAILURE})
  }
}

export function* watchAuth() {
  yield takeLatest(SIGN_IN, signIn)
  yield takeLatest(SIGN_UP, signUp)
}
