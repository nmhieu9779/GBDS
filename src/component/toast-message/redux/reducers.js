import * as actions from "@src/redux/actions"

initStateToastMessage = {
  visible: false,
  message: ""
}

const toastMessage = (state = initStateSelectTypePost, action) => {
  switch (action.type) {
    case actions.ACTION_SHOW_TOAST:
      return {visible: true, message: action.params}
    case actions.ACTION_RESET_TOAST:
      return {visible: false, message: ""}
    default:
      return state
  }
}

export default toastMessage
