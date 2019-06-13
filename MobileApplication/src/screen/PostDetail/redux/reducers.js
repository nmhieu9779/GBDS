import * as actions from "@src/redux/actions"

initStatePostDetail = {
  loading: false,
  response: null,
  success: false
}

const postDetail = (state = initStatePostDetail, action) => {
  switch (action.type) {
    case actions.ACTION_GET_DETAIL_POST:
      return {
        loading: true,
        response: null,
        success: false
      }
    case actions.ACTION_GET_DETAIL_POST_SUCCESS:
      return {
        loading: false,
        response: action.response,
        success: true
      }
    case actions.ACTION_GET_DETAIL_POST_SUCCESS:
      return {
        loading: false,
        response: action.error,
        success: false
      }
    default:
      return state
  }
}

export default postDetail
