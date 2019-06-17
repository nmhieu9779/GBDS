import * as actions from "@src/redux/actions"

initStateForNewPost = {
  uploadPostFor: {loading: false, response: null, success: false},
  postFor: {loading: false, response: null, success: false}
}

const postFor = (state = initStateForNewPost, action) => {
  switch (action.type) {
    case actions.ACTION_UPLOAD_POST_FOR:
      return {...state, uploadPostFor: {...state.uploadPostFor, loading: true, success: false}}
    case actions.ACTION_UPLOAD_POST_FOR_SUCCESS:
      const response = {
        ...action.response,
        content: state.uploadPostFor.response
          ? [...state.uploadPostFor.response.content, ...action.response.content]
          : action.response.content
      }
      return {
        ...state,
        uploadPostFor: {...state.uploadPostFor, loading: false, response: response, success: true}
      }
    case actions.ACTION_UPLOAD_POST_FOR_SUCCESS:
      return {...state, uploadPostFor: {loading: false, success: false}}
    case actions.ACTION_POST_FOR:
      return {...state, postFor: {loading: true, response: null, success: false}}
    case actions.ACTION_POST_FOR_SUCCESS:
      return {...state, postFor: {loading: false, response: action.response, success: true}}
    case actions.ACTION_POST_FOR_FAILURE:
      return {...state, postFor: {loading: false, response: action.error, success: false}}
    default:
      return state
  }
}

export default postFor
