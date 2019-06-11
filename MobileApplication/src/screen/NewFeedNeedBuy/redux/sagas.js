import * as actions from "@src/redux/actions"
import {put, takeLatest, call} from "redux-saga/effects"
import * as service from "./service"

function* fetchPostNeedBuy(action) {
  const response = yield call(service.fetchPostNeedBuy, action.params)
  if (response.status === 200) {
    if (response.data.content.pageable.pageNumber === 0) {
      yield put(actions.fetchPostNeedBuySuccess(response.data))
    } else {
      yield put(actions.fetchMorePostNeedBuySuccess(response.data))
    }
  } else {
    yield put(actions.fetchPostNeedBuyFailure(response.response.data))
  }
}

export function* watchNewFeedNeedBuy() {
  yield takeLatest(actions.ACTION_FETCH_POST_NEED_BUY, fetchPostNeedBuy)
}
