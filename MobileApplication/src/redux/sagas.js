import {call, all, fork} from "redux-saga/effects"
import {watchAuth} from "@src/screen/AuthScreen/redux/sagas"
import {watchAddress} from "@src/component/address-input/redux/sagas"
import {watchNewFeedForSale} from "@src/screen/NewFeedForSale/redux/sagas"
import {watchNewFeedForRent} from "@src/screen/NewFeedForRent/redux/sagas"
import {watchNewFeedNeedSale} from "@src/screen/NewFeedNeedSale/redux/sagas"
import {watchNewFeedNeedRent} from "@src/screen/NewFeedNeedRent/redux/sagas"

export default function* rootSaga() {
  yield all([
    watchAuth(),
    watchAddress(),
    watchNewFeedForSale(),
    watchNewFeedForRent(),
    watchNewFeedNeedSale(),
    watchNewFeedNeedRent()
  ])
}
