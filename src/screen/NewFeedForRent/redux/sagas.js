import * as actions from "@src/redux/actions"
import {put, takeLatest, call} from "redux-saga/effects"
import newFeedForRentService from "./service"

function* fetchPostForRent(action) {
  const response = yield call(newFeedForRentService.fetchPostForRent, action.params)
  if (response.status === 200) {
    if (response.data.content.pageable.pageNumber === 0) {
      yield put(actions.fetchPostForRentSuccess(response.data || {}))
    } else {
      yield put(actions.fetchMorePostForRentSuccess(response.data || {}))
    }
  } else {
    yield put(actions.fetchPostForRentFailure(response.response ? response.response.data : {}))
  }
}

export function* watchNewFeedForRent() {
  yield takeLatest(actions.ACTION_FETCH_POST_FOR_RENT, fetchPostForRent)
}
