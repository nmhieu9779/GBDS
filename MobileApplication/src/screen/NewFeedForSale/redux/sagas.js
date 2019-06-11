import * as actions from "@src/redux/actions"
import {put, takeLatest, call} from "redux-saga/effects"
import * as service from "./service"

function* fetchPostForSale(action) {
  const response = yield call(service.fetchPostForSale, action.params)
  if (response.status === 200) {
    if (response.data.content.pageable.pageNumber === 0) {
      yield put(actions.fetchPostForSaleSuccess(response.data))
    } else {
      yield put(actions.fetchMorePostForSaleSuccess(response.data))
    }
  } else {
    yield put(actions.fetchPostForSaleFailure(response.response.data))
  }
}

export function* watchNewFeedForSale() {
  yield takeLatest(actions.ACTION_FETCH_POST_FOR_SALE, fetchPostForSale)
}
