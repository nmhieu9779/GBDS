import {SIGN_IN, SIGN_IN_SUCCESS, SIGN_UP, SIGN_UP_SUCCESS, OPEN_HUD, CLOSE_HUD} from "../../redux/actions"
import AsyncStorage from "@react-native-community/async-storage"
import {put, takeLatest, call} from "redux-saga/effects"
import {Api} from "./api"

function* signIn(payload) {
  yield put({type: OPEN_HUD})
  const response = yield Api.signIn(payload.payload)
  if (response.status === 200) {
    yield AsyncStorage.setItem("accessToken", response.data.access_token)
    yield put({type: SIGN_IN_SUCCESS})
  }
  yield put({type: CLOSE_HUD})
}

function* signUp(payload) {
  yield put({type: OPEN_HUD})
  const response = yield Api.signUp(payload.payload)
  if (response.status === 200) {
    yield put({type: SIGN_UP_SUCCESS})
  }
  yield put({type: CLOSE_HUD})
}

export function* watchAuth() {
  yield takeLatest(SIGN_IN, signIn)
  yield takeLatest(SIGN_UP, signUp)
}
