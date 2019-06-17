import {URL_UPLOAD_POST_FOR, URL_POST_FOR_SALE, URL_POST_FOR_RENT} from "@src/constant/url"
import {postToken, upload} from "@src/redux/server"

function* uploadPostFor(param) {
  let url = `${URL_UPLOAD_POST_FOR}/${param.id}`
  const body = param.formData
  return yield upload({url, body})
}

function* postFor(params) {
  let url = params.type === "SALE" ? URL_POST_FOR_SALE : URL_POST_FOR_RENT
  const body = params.body
  return yield postToken({url, body})
}

export {uploadPostFor, postFor}
