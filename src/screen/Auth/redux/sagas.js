import * as actions from "@src/redux/actions"
import Authservice from "./service"
import {put, takeLatest, call} from "redux-saga/effects"
import {asyncStorage} from "@src/utilities"

function* signIn(action) {
  const response = yield call(Authservice.signIn, action.params)
  if (response.status === 200) {
    const data = {
      accessToken: response.data.access_token,
      refreshToken: response.data.refresh_token,
      tokenType: response.data.token_type,
      userId: response.data.user_id,
      email: action.params.email.toLowerCase()
    }
    yield asyncStorage.setItemAsyncStorage({keyName: "USER_OAUTH", data: data})
    yield asyncStorage.setItemAsyncStorage({keyName: "IS_SKIP_SIGNIN", data: true})
    yield asyncStorage.setItemAsyncStorage({keyName: "IS_SIGNIN", data: true})
    yield put(actions.signInSuccess(data))
    yield put(actions.getUserProfile({email: data.email}))
    yield put(actions.getUriAvatar({email: data.email}))
    yield put(actions.countNoti({email: data.email}))
    yield put(actions.getProductType())
    yield put(actions.getCity())
    yield put(actions.showToast("Đăng nhập thành công"))
  } else {
    yield put(actions.signInFailure(response.response ? response.response.data : {}))
    yield put(
      actions.showToast(response.response && response.response.data && response.response.data.content)
    )
  }
}

function* signUp(action) {
  const response = yield call(Authservice.signUp, action.params)
  if (response.status === 201) {
    yield put(actions.signUpSuccess(response.data || {}))
    yield put(actions.showToast("Đăng ký thành công"))
  } else {
    yield put(actions.signUpFailure(response.response ? response.response.data : {}))
    yield put(
      actions.showToast(response.response && response.response.data && response.response.data.content)
    )
  }
}

function* getInfoFacebook(action) {
  const response = yield call(Authservice.getInfoFacebook, action.params)
  if (response.status === 200) {
    yield put(actions.getInfoFacebookSuccess(response.data || {}))
  } else {
    yield put(actions.getInfoFacebookFailure(response.response ? response.response.data : {}))
  }
}

export function* watchAuth() {
  yield takeLatest(actions.ACTION_SIGN_IN, signIn)
  yield takeLatest(actions.ACTION_GET_INFO_FACEBOOK, getInfoFacebook)
  yield takeLatest(actions.ACTION_SIGN_UP, signUp)
}
