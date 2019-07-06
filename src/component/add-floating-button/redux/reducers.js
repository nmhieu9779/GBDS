import * as actions from "@src/redux/actions"

initStateSelectTypePost = {
  visiable: false
}

const selectTypePost = (state = initStateSelectTypePost, action) => {
  switch (action.type) {
    case actions.ACTION_OPEN_SELECT_TYPE_POST:
      return {visiable: true, screen: action.params}
    case actions.ACTION_CLOSE_SELECT_TYPE_POST:
      return {visiable: false, screen: null}
    default:
      return state
  }
}

export default selectTypePost
