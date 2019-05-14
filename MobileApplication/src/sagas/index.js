import { call, all, fork } from "redux-saga/effects"
import { watchAuth } from "../AuthScreen/authSagas"
import { watchAddress } from '../Component/AddressInput/addressSagas';
export default function* rootSaga() {
  yield all([watchAuth(),watchAddress()])
}
