import {call, all, fork} from "redux-saga/effects"
import {watchAuth} from "../AuthScreen/redux/sagas"
import {watchAddress} from "../Component/address-input/redux/sagas"
import {watchHome} from "../HomeScreen/redux/sagas"
export default function* rootSaga() {
  yield all([watchAuth(), watchAddress(), watchHome()])
}
