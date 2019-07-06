import * as actions from "@src/redux/actions"

initStateNotification = {
  notification: {loading: false, response: null, success: false, error: null}
}

const notification = (state = initStateNotification, action) => {
  switch (action.type) {
    case actions.ACTION_GET_NOTIFICATION:
      return {...state, notification: {loading: true, response: null, success: false, error: null}}
    case actions.ACTION_GET_NOTIFICATION_SUCCESS:
      return {
        ...state,
        notification: {...state.notification, loading: false, response: action.response, success: true}
      }
    case actions.ACTION_GET_NOTIFICATION_FAILURE:
      return {
        ...state,
        notification: {...state.notification, loading: false, error: action.error, success: false}
      }
    default:
      return state
  }
}

export default notification
