import {fromJS} from "immutable"
import {FETCH_POST_NEED_RENT_HOME, FETCH_POST_NEED_RENT_HOME_SUCCESS} from "@src/redux/actions"

initStateNeedRent = {
  data: [],
  refreshing: false
}

const NewFeedNeedRentReducers = (state = initStateNeedRent, action) => {
  let newState = fromJS(state).toJS()
  switch (action.type) {
    case FETCH_POST_NEED_RENT_HOME:
      newState.refreshing = true
      break
    case FETCH_POST_NEED_RENT_HOME_SUCCESS:
      newState.data = action.data
      newState.refreshing = false
      break
    default:
      break
  }
  return newState
}

export default NewFeedNeedRentReducers
