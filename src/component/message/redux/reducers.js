import {SHOW_MESSAGE, UN_SHOW_MESSAGE} from "@src/redux/actions"

INIT_STATE_MESSAGE = {
  typeMessage: null,
  isShow: false,
  message: null
}

const message = (state = INIT_STATE_MESSAGE, action) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      return {
        typeMessage: action.typeMessage,
        isShow: true,
        message: action.message
      }
    case UN_SHOW_MESSAGE:
      return {
        typeMessage: null,
        isShow: false,
        message: null
      }
    default:
      return state
  }
}

export default message
