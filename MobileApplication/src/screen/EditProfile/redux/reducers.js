import * as actions from "@src/redux/actions"

initStateEditProfile = {
  uploadImage: {
    loading: false,
    response: null,
    success: false
  },
  editProfile: {
    loading: false,
    response: null,
    success: false
  }
}

const editProfile = (state = initStateEditProfile, action) => {
  switch (action.type) {
    case actions.ACTION_UPLOAD_IMAGE:
      return {
        ...state,
        uploadImage: {
          loading: true,
          response: null,
          success: false
        }
      }
    case actions.ACTION_UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        uploadImage: {
          loading: false,
          response: action.response,
          success: true
        }
      }
    case actions.ACTION_UPLOAD_IMAGE_FAILURE:
      return {
        ...state,
        uploadImage: {
          loading: false,
          response: action.error,
          success: false
        }
      }
    case actions.ACTION_RESET_UPLOAD_IMAGE:
      return {
        ...state,
        uploadImage: {
          loading: false,
          response: null,
          success: false
        }
      }
    case actions.ACTION_EDIT_PROFILE:
      return {
        ...state,
        editProfile: {
          loading: true,
          response: null,
          success: false
        }
      }
    case actions.ACTION_EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        editProfile: {
          loading: false,
          response: action.response,
          success: true
        }
      }
    case actions.ACTION_EDIT_PROFILE_FAILURE:
      return {
        ...state,
        editProfile: {
          loading: false,
          response: action.error,
          success: false
        }
      }
    default:
      return state
  }
}

export default editProfile
