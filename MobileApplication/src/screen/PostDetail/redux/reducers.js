import * as actions from "@src/redux/actions"

initStatePostDetail = {
  postDetail: {loading: false, response: null, success: false},
  interactivePost: {loading: false, response: null, success: false}
}

const postDetail = (state = initStatePostDetail, action) => {
  switch (action.type) {
    case actions.ACTION_GET_DETAIL_POST:
      return {...state, postDetail: {loading: true, response: null, success: false}}
    case actions.ACTION_GET_DETAIL_POST_SUCCESS:
      return {...state, postDetail: {loading: false, response: action.response, success: true}}
    case actions.ACTION_GET_DETAIL_POST_FAILURE:
      return {...state, postDetail: {loading: false, response: action.error, success: false}}
    case actions.ACTION_INTERACTIVE_POST:
      return {...state, interactivePost: {loading: true, response: null, success: false}}
    case actions.ACTION_INTERACTIVE_POST_SUCCESS:
      return {...state, interactivePost: {loading: false, response: action.response, success: true}}
    case actions.ACTION_INTERACTIVE_POST_FAILURE:
      return {...state, interactivePost: {loading: false, response: action.error, success: false}}
    default:
      return state
  }
}

export default postDetail
