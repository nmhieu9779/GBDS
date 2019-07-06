import * as actions from "@src/redux/actions"
import {put, takeLatest, call} from "redux-saga/effects"
import newFeedNeedRentService from "./service"

function* fetchPostNeedRent(action) {
  const response = yield call(newFeedNeedRentService.fetchPostNeedRent, action.params)
  if (response.status === 200) {
    if (response.data.content.pageable.pageNumber === 0) {
      yield put(actions.fetchPostNeedRentSuccess(response.data || {}))
    } else {
      yield put(actions.fetchMorePostNeedRentSuccess(response.data || {}))
    }
  } else {
    yield put(actions.fetchPostNeedRentFailure(response.response ? response.response.data : {}))
  }
}

export function* watchNewFeedNeedRent() {
  yield takeLatest(actions.ACTION_FETCH_POST_NEED_RENT, fetchPostNeedRent)
}
