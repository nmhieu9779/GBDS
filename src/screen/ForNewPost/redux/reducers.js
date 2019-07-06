import * as actions from "@src/redux/actions"

initStateForNewPost = {
  uploadPostFor: {loading: false, response: null, success: false, error: null},
  postFor: {loading: false, response: null, success: false},
  deleteImagePost: {loading: false, response: null, success: false, error: null},
  geocoding: {loading: false, response: null, success: false, error: null}
}

const postFor = (state = initStateForNewPost, action) => {
  switch (action.type) {
    case actions.ACTION_UPLOAD_POST_FOR:
      return {
        ...state,
        uploadPostFor: {...state.uploadPostFor, response: null, loading: true, success: false, error: null}
      }
    case actions.ACTION_UPLOAD_POST_FOR_SUCCESS:
      return {
        ...state,
        uploadPostFor: {...state.uploadPostFor, loading: false, response: action.response, success: true}
      }
    case actions.ACTION_UPLOAD_POST_FOR_FAILURE:
      return {
        ...state,
        uploadPostFor: {...state.uploadPostFor, loading: false, success: false, error: action.error}
      }
    case actions.ACTION_DELETE_IMAGE_POST:
      return {
        ...state,
        deleteImagePost: {
          ...state.deleteImagePost,
          loading: true,
          response: null,
          success: false,
          error: null
        }
      }
    case actions.ACTION_DELETE_IMAGE_POST_SUCCESS:
      return {
        ...state,
        deleteImagePost: {...state.deleteImagePost, loading: false, response: action.response, success: true}
      }
    case actions.ACTION_DELETE_IMAGE_POST_FAILURE:
      return {
        ...state,
        deleteImagePost: {...state.deleteImagePost, loading: false, error: action.error, success: false}
      }
    case actions.ACTION_POST_FOR:
      return {...state, postFor: {loading: true, response: null, success: false}}
    case actions.ACTION_POST_FOR_SUCCESS:
      return {...state, postFor: {loading: false, response: action.response, success: true}}
    case actions.ACTION_POST_FOR_FAILURE:
      return {...state, postFor: {loading: false, response: action.error, success: false}}
    case actions.ACTION_GET_GEOCODING:
      return {...state, geocoding: {...state.geocoding, loading: true, success: false}}
    case actions.ACTION_GET_GEOCODING_SUCCESS:
      return {
        ...state,
        geocoding: {...state.geocoding, loading: false, response: action.response, success: true}
      }
    case actions.ACTION_GET_GEOCODING_FAILURE:
      return {
        ...state,
        geocoding: {...state.geocoding, loading: false, error: action.error, success: false}
      }
    case actions.ACTION_RESET_INFO_POST_FOR:
      return {
        uploadPostFor: {loading: false, response: null, success: false, error: null},
        postFor: {loading: false, response: null, success: false},
        deleteImagePost: {loading: false, response: null, success: false, error: null},
        geocoding: {loading: false, response: null, success: false, error: null}
      }
    default:
      return state
  }
}

export default postFor
