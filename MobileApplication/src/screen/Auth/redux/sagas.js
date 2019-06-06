import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from "@src/redux/actions"
import AsyncStorage from "@react-native-community/async-storage"
import {put, takeLatest, call} from "redux-saga/effects"
import {Api} from "./api"

function* signIn(payload) {
  const response = yield Api.signIn(payload.payload)
  if (response.status === 200) {
    yield AsyncStorage.removeItem("USER_OAUTH")
    yield AsyncStorage.setItem(
      "USER_OAUTH",
      JSON.stringify({
        accessToken: response.data.access_token,
        refreshToken: response.data.refresh_token,
        tokenType: response.data.token_type,
        userId: response.data.user_id,
        email: payload.payload.email.toLowerCase()
      })
    )
    yield AsyncStorage.setItem("SKIP_LOGIN", JSON.stringify(true))
    yield put({type: SIGN_IN_SUCCESS})
  } else {
    yield put({type: SIGN_IN_FAILURE})
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
