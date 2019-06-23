import {
  URL_UPLOAD_POST_FOR,
  URL_POST_FOR_SALE,
  URL_POST_FOR_RENT,
  URL_DELETE_IMAGE_POST_SALE_EXISTED,
  URL_DELETE_IMAGE_POST_RENT_EXISTED,
  URL_DELETE_IMAGE_POST
} from "@src/constant/url"
import {postToken, upload, patchToken, deleteToken} from "@src/redux/server"

function* uploadPostFor(param) {
  let url = `${URL_UPLOAD_POST_FOR}/${param.id}`
  const body = param.formData
  return yield upload({url, body})
}

function* deleteImagePost(param) {
  let url = ""
  if (param.isNew) {
    url = `${URL_DELETE_IMAGE_POST}?urls=${param.uri}`
  } else {
    url =
      param.type === "SALE"
        ? `${URL_DELETE_IMAGE_POST_SALE_EXISTED}?urls=${param.uri}`
        : `${URL_DELETE_IMAGE_POST_RENT_EXISTED}?urls=${param.uri}`
  }
  return yield deleteToken({url})
}

function* postFor(params) {
  let url = params.type === "SALE" ? URL_POST_FOR_SALE : URL_POST_FOR_RENT
  const body = params.body
  return params.isNew ? yield postToken({url, body}) : yield patchToken({url, body})
}

export {uploadPostFor, postFor, deleteImagePost}
