import {GET_USER_PROFILE, GET_USER_PROFILE_SUCCESS, GET_USER_PROFILE_FAILURE} from "@src/redux/actions"

export const onGetUserProfile = ({email}) => ({type: GET_USER_PROFILE, email})

export const onGetUserProfileSuccess = (payload) => ({
  type: GET_USER_PROFILE_SUCCESS,
  payload
})

export const onGetUserProfileFailure = () => ({type: GET_USER_PROFILE_FAILURE})
