import {fromJS} from "immutable"
import {
  FETCH_POST_FOR_RENT_HOME,
  FETCH_POST_FOR_RENT_HOME_SUCCESS,
  FETCH_POST_FOR_RENT_HOME_FAILURE
} from "@src/redux/actions"

initStateForRent = {
  loading: false,
  refreshing: false,
  data: []
}

const newFeedForRentReducers = (state = initStateForRent, action) => {
  let newState = fromJS(state).toJS()
  switch (action.type) {
    case FETCH_POST_FOR_RENT_HOME:
      newState.refreshing = true
      newState.loading = true
      break
    case FETCH_POST_FOR_RENT_HOME_SUCCESS:
      newState.data = action.data
      newState.refreshing = false
      newState.loading = false
      break
    case FETCH_POST_FOR_RENT_HOME_FAILURE:
      newState.refreshing = false
      newState.loading = false
      break
    default:
      break
  }
  return newState
}

export default newFeedForRentReducers
