import {fromJS} from "immutable"
import {
  FETCH_POST_FOR_SALE_HOME,
  FETCH_POST_FOR_SALE_HOME_SUCCESS,
  FETCH_POST_FOR_SALE_HOME_FAILURE
} from "@src/redux/actions"

INIT_STATE = {
  loading: false,
  refreshing: false,
  data: []
}

const NewFeedForSaleReducers = (state = INIT_STATE, action) => {
  let newState = fromJS(state).toJS()
  switch (action.type) {
    case FETCH_POST_FOR_SALE_HOME:
      newState.refreshing = true
      newState.loading = true
      break
    case FETCH_POST_FOR_SALE_HOME_SUCCESS:
      newState.data = action.data
      newState.refreshing = false
      newState.loading = false
      break
    case FETCH_POST_FOR_SALE_HOME_FAILURE:
      newState.refreshing = false
      newState.loading = false
      break
    default:
      break
  }
  return newState
}

export default NewFeedForSaleReducers
