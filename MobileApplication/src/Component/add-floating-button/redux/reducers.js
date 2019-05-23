import { fromJS } from "immutable"
import { OPEN_SELECT_TYPE_POST, CLOSE_SELECT_TYPE_POST } from "../../../actions"

initStateSelectTypePost = {
  visiable: false
}

const selectTypePostReducers = (state = initStateSelectTypePost, action) => {
  let newState = fromJS(state).toJS()
  switch (action.type) {
    case OPEN_SELECT_TYPE_POST:
      newState.visiable = true
      break
    case CLOSE_SELECT_TYPE_POST:
      newState.visiable = false
      break
    default:
      break
  }
  return newState
}

export default selectTypePostReducers
