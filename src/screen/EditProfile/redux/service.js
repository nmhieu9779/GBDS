import {URL_EDIT_PROFILE, URL_UPLOAD_IMAGE, URL_CHANGE_PASSWORD} from "@src/constant/url"
import {UPLOAD, PATCH, POST} from "@src/redux/server"

const editProfileService = {
  uploadImage: async (formData) => {
    const url = URL_UPLOAD_IMAGE
    const body = formData
    return await UPLOAD({url, body})
  },
  editProfile: async (params) => {
    const url = URL_EDIT_PROFILE
    const body = params.body
    if (params.isCreate) {
      return await POST({url, body, bearer: true})
    } else {
      return await PATCH({url, body, bearer: true})
    }
  },
  changePassword: async (params) => {
    const url = URL_CHANGE_PASSWORD
    const body = params
    return await PATCH({url, body, bearer: true})
  }
}

export default editProfileService
