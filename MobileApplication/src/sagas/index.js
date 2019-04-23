import { call, all, fork } from "redux-saga/effects"
import { watchLogin } from "../LoginScreen/loginSagas"
import { watchRegistration } from "../RegistrationScreen/registrationSagas"
export default function* rootSaga() {
  yield all([watchLogin(), watchRegistration()])
}
