import * as actions from "@src/redux/actions"

initStatePostDetail = {
  postDetail: {loading: false, response: null, success: false},
  interactivePost: {loading: false, response: null, success: false},
  openPost: {loading: false, response: null, success: false},
  closePost: {loading: false, response: null, success: false},
  deletePost: {loading: false, response: null, success: false}
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
    case actions.ACTION_CLOSE_POST:
      return {...state, closePost: {loading: true, response: null, success: false}}
    case actions.ACTION_CLOSE_POST_SUCCESS:
      return {...state, closePost: {loading: false, response: action.response, success: true}}
    case actions.ACTION_CLOSE_POST_FAILURE:
      return {...state, closePost: {loading: false, response: action.error, success: false}}
    case actions.ACTION_OPEN_POST:
      return {...state, openPost: {loading: true, response: null, success: false}}
    case actions.ACTION_OPEN_POST_SUCCESS:
      return {...state, openPost: {loading: false, response: action.response, success: true}}
    case actions.ACTION_OPEN_POST_FAILURE:
      return {...state, openPost: {loading: false, response: action.error, success: false}}
    case actions.ACTION_DELETE_POST:
      return {...state, deletePost: {loading: true, response: null, success: false}}
    case actions.ACTION_DELETE_POST_SUCCESS:
      return {...state, deletePost: {loading: false, response: action.response, success: true}}
    case actions.ACTION_DELETE_POST_FAILURE:
      return {...state, deletePost: {loading: false, response: action.error, success: false}}
    case actions.ACTION_RESET_POST_DETAIL:
      return {
        postDetail: {loading: false, response: null, success: false},
        interactivePost: {loading: false, response: null, success: false},
        openPost: {loading: false, response: null, success: false},
        closePost: {loading: false, response: null, success: false},
        deletePost: {loading: false, response: null, success: false}
      }
    default:
      return state
  }
}

export default postDetail
