import * as actions from "@src/redux/actions"
import * as services from "./service"
import {put, takeLatest, call} from "redux-saga/effects"
import {setItemAsyncStorage} from "@src/utilities/asyncStorage"

function* signIn(action) {
  const response = yield call(services.signIn, action.params)
  if (response.status === 200) {
    const data = {
      accessToken: response.data.access_token,
      refreshToken: response.data.refresh_token,
      tokenType: response.data.token_type,
      userId: response.data.user_id,
      email: action.params.email.toLowerCase()
    }
    yield setItemAsyncStorage({keyName: "USER_OAUTH", data: data})
    yield setItemAsyncStorage({keyName: "IS_SKIP_SIGNIN", data: true})
    yield setItemAsyncStorage({keyName: "IS_SIGNIN", data: true})
    yield put(actions.signInSuccess(response.data))
    yield put(actions.getUserProfile({email: data.email}))
    yield put(actions.getUriAvatar({email: data.email}))
  } else {
    yield put(actions.signInFailure(response.response.data))
    // yield put({type: SHOW_MESSAGE, typeMessage: "ERROR", message: response.response.data.error_description})
  }
}

function* signUp(action) {
  const response = yield call(services.signUp, action.params)
  if (response.status === 201) {
    yield put(actions.signUpSuccess(response.data))
    // yield put({type: UN_SHOW_MESSAGE})
  } else {
    yield put(actions.signUpFailure(response.response.data))
    // yield put({type: SHOW_MESSAGE, typeMessage: "ERROR", message: response.response.data.message})
  }
}

export function* watchAuth() {
  yield takeLatest(actions.ACTION_SIGN_IN, signIn)
  yield takeLatest(actions.ACTION_SIGN_UP, signUp)
}
