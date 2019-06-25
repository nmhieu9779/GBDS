import * as actions from "@src/redux/actions"
import * as services from "./service"
import {put, takeLatest, call} from "redux-saga/effects"
import {asyncStorage, toast} from "@src/utilities"

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
    yield asyncStorage.setItemAsyncStorage({keyName: "USER_OAUTH", data: data})
    yield asyncStorage.setItemAsyncStorage({keyName: "IS_SKIP_SIGNIN", data: true})
    yield asyncStorage.setItemAsyncStorage({keyName: "IS_SIGNIN", data: true})
    yield put(actions.signInSuccess(data))
    yield put(actions.getUserProfile({email: data.email}))
    yield put(actions.getUriAvatar({email: data.email}))
    yield put(actions.getProductType())
    yield put(actions.getCity())
    toast.showToast("Đăng nhập thành công", "#ffffff", "#0EA854")
  } else {
    yield put(actions.signInFailure(response.response.data))
    toast.showToast(response.response.data.error_description, "#ffffff", "#E0002C")
  }
}

function* signUp(action) {
  const response = yield call(services.signUp, action.params)
  if (response.status === 201) {
    yield put(actions.signUpSuccess(response.data))
    toast.showToast("Đăng ký thành công", "#ffffff", "#0EA854")
  } else {
    yield put(actions.signUpFailure(response.response.data))
    toast.showToast(response.response.data.content, "#ffffff", "#E0002C")
  }
}

export function* watchAuth() {
  yield takeLatest(actions.ACTION_SIGN_IN, signIn)
  yield takeLatest(actions.ACTION_SIGN_UP, signUp)
}
