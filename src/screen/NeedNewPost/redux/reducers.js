import * as actions from "@src/redux/actions"

initStateNeedNewPost = {
  postNeed: {loading: false, response: null, success: false}
}

const postNeed = (state = initStateNeedNewPost, action) => {
  switch (action.type) {
    case actions.ACTION_POST_NEED:
      return {...state, postNeed: {loading: true, response: null, success: false}}
    case actions.ACTION_POST_NEED_SUCCESS:
      return {...state, postNeed: {loading: false, response: action.response, success: true}}
    case actions.ACTION_POST_NEED_FAILURE:
      return {...state, postNeed: {loading: false, response: action.error, success: false}}
    case actions.ACTION_RESET_INFO_POST_NEED:
      return {postNeed: {loading: true, response: null, success: false}}
    default:
      return state
  }
}

export default postNeed
