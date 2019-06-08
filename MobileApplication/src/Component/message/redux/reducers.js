import {fromJS} from "immutable"
import {SHOW_MESSAGE, UN_SHOW_MESSAGE} from "@src/redux/actions"

INIT_STATE_MESSAGE = {
  typeMessage: null,
  isShow: false,
  message: null
}

const message = (state = INIT_STATE_MESSAGE, action) => {
  let newState = fromJS(state).toJS()
  switch (action.type) {
    case SHOW_MESSAGE:
      newState.typeMessage = action.typeMessage
      newState.isShow = true
      newState.message = action.message
      break
    case UN_SHOW_MESSAGE:
      newState.typeMessage = null
      newState.isShow = false
      newState.message = null
      break
    default:
      break
  }
  return newState
}

export default message
