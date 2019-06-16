import {
  URL_GET_DETAIL_POST_FOR_SALE,
  URL_GET_DETAIL_POST_FOR_RENT,
  URL_GET_DETAIL_POST_NEED_BUY,
  URL_GET_DETAIL_POST_NEED_RENT,
  URL_FOLLOW_POST,
  URL_UN_FOLLOW_POST
} from "@src/constant/url"
import {get, patch} from "@src/redux/server"

function* getDetailPost(param) {
  let url = ""
  switch (param.type) {
    case "FOR_SALE":
      url = `${URL_GET_DETAIL_POST_FOR_SALE}/${param.id}`
      break
    case "FOR_RENT":
      url = `${URL_GET_DETAIL_POST_FOR_RENT}/${param.id}`
      break
    case "NEED_BUY":
      url = `${URL_GET_DETAIL_POST_NEED_BUY}/${param.id}`
      break
    case "NEED_RENT":
      url = `${URL_GET_DETAIL_POST_NEED_RENT}/${param.id}`
      break
    default:
      break
  }
  return yield get({url})
}

function* interactivePost(params) {
  let url = `${params.follow ? URL_FOLLOW_POST : URL_UN_FOLLOW_POST}/${params.email}/${params.id}`
  return yield patch({url})
}

export {getDetailPost, interactivePost}
