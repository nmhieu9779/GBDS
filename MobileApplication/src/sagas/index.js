import { call, all, fork } from "redux-saga/effects"
import { watchAuth } from "../AuthScreen/authSagas"
export default function* rootSaga() {
  yield all([watchAuth()])
}
