import {fromJS} from "immutable"
import {FETCH_POST_FOR_RENT_HOME, FETCH_POST_FOR_RENT_HOME_SUCCESS} from "@src/redux/actions"

initStateForRent = {
  data: [],
  refreshing: false
}

const newFeedForRentReducers = (state = initStateForRent, action) => {
  let newState = fromJS(state).toJS()
  switch (action.type) {
    case FETCH_POST_FOR_RENT_HOME:
      newState.refreshing = true
      break
    case FETCH_POST_FOR_RENT_HOME_SUCCESS:
      newState.data = action.data
      break
    default:
      break
  }
  return newState
}

export default newFeedForRentReducers
