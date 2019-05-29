import {fromJS} from "immutable"
import {
  FETCH_POST_FOR_SALE_HOME,
  FETCH_POST_FOR_RENT_HOME,
  FETCH_POST_FOR_SALE_HOME_SUCCESS,
  FETCH_POST_FOR_RENT_HOME_SUCCESS
} from "../../redux/actions"

initStateHome = {
  listData: [{title: "Nhà đất bán nổi bật", data: []}, {title: "Nhà đất cho thuê nổi bật nhất", data: []}],
  refreshing: false
}

const homeReducers = (state = initStateHome, action) => {
  let newState = fromJS(state).toJS()
  switch (action.type) {
    case FETCH_POST_FOR_SALE_HOME:
      newState.refreshing = true
      break
    case FETCH_POST_FOR_SALE_HOME_SUCCESS:
      newState.listData[0].data = action.data
      newState.refreshing = false
      break
    case FETCH_POST_FOR_RENT_HOME:
      newState.refreshing = true
      break
    case FETCH_POST_FOR_RENT_HOME_SUCCESS:
      newState.listData[1].data = action.data
      break
    default:
      break
  }
  return newState
}

export default homeReducers
