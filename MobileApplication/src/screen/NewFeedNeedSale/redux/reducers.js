import {fromJS} from "immutable"
import {FETCH_POST_NEED_SALE_HOME, FETCH_POST_NEED_SALE_HOME_SUCCESS} from "@src/redux/actions"

initStateNeedSale = {
  data: [],
  refreshing: false
}

const NewFeedNeedSaleReducers = (state = initStateNeedSale, action) => {
  let newState = fromJS(state).toJS()
  switch (action.type) {
    case FETCH_POST_NEED_SALE_HOME:
      newState.refreshing = true
      break
    case FETCH_POST_NEED_SALE_HOME_SUCCESS:
      newState.data = action.data
      newState.refreshing = false
      break
    default:
      break
  }
  return newState
}

export default NewFeedNeedSaleReducers
