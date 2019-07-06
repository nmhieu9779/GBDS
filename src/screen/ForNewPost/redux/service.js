import {
  URL_UPLOAD_POST_FOR,
  URL_POST_FOR_SALE,
  URL_POST_FOR_RENT,
  URL_DELETE_IMAGE_POST_SALE_EXISTED,
  URL_DELETE_IMAGE_POST_RENT_EXISTED,
  URL_DELETE_IMAGE_POST,
  URL_GET_GEOCODING
} from "@src/constant/url"
import {POST, UPLOAD, PATCH, DELETE, GET} from "@src/redux/server"

const forNewPostService = {
  uploadPostFor: async (param) => {
    let url = `${URL_UPLOAD_POST_FOR}/${param.id}`
    const body = param.formData
    return await UPLOAD({url, body, bearer: true})
  },
  deleteImagePost: async (param) => {
    let url = ""
    if (param.isNew) {
      url = `${URL_DELETE_IMAGE_POST}?urls`
    } else {
      url =
        param.type === "SALE"
          ? `${URL_DELETE_IMAGE_POST_SALE_EXISTED}?urls`
          : `${URL_DELETE_IMAGE_POST_RENT_EXISTED}?urls`
    }
    param.data.forEach((e) => {
      url += `=${e}`
    })
    return await DELETE({url, bearer: true})
  },
  postFor: async (params) => {
    let url = params.type === "SALE" ? URL_POST_FOR_SALE : URL_POST_FOR_RENT
    const body = params.body
    return params.isNew ? await POST({url, body, bearer: true}) : await PATCH({url, body, bearer: true})
  },
  getGeocoding: async (address) => {
    let url = `${URL_GET_GEOCODING}`
    let params = {
      address: `${address}`,
      key: "AIzaSyAmY-PJu2VbyG0Fpj-5wUQpcoLDe1OmS7U"
    }
    return await GET({url, params})
  }
}

export default forNewPostService
