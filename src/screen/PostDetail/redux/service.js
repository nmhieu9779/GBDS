import {
  URL_GET_DETAIL_POST_FOR_SALE,
  URL_GET_DETAIL_POST_FOR_RENT,
  URL_GET_DETAIL_POST_NEED_BUY,
  URL_GET_DETAIL_POST_NEED_RENT,
  URL_FOLLOW_POST,
  URL_UN_FOLLOW_POST,
  URL_CLOSE_POST,
  URL_OPEN_POST,
  URL_DELETE_POST_FOR_SALE,
  URL_DELETE_POST_FOR_RENT,
  URL_DELETE_POST_NEED_BUY,
  URL_DELETE_POST_NEED_RENT
} from "@src/constant/url"
import {GET, PATCH, DELETE} from "@src/redux/server"

const postDetailService = {
  getDetailPost: async (param) => {
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
    return await GET({url})
  },
  interactivePost: async (params) => {
    let url = `${params.follow ? URL_FOLLOW_POST : URL_UN_FOLLOW_POST}/${params.email}/${params.id}`
    return await PATCH({url})
  },
  closePost: async (params) => {
    let url = `${URL_CLOSE_POST}/${params.id}`
    return await PATCH({url, bearer: true})
  },
  openPost: async (params) => {
    let url = `${URL_OPEN_POST}/${params.id}`
    return await PATCH({url, bearer: true})
  },
  deletePost: async (params) => {
    let url = ""
    switch (params.type) {
      case "FOR_SALE":
        url = `${URL_DELETE_POST_FOR_SALE}/${params.id}`
        break
      case "FOR_RENT":
        url = `${URL_DELETE_POST_FOR_RENT}/${params.id}`
        break
      case "NEED_BUY":
        url = `${URL_DELETE_POST_NEED_BUY}/${params.id}`
        break
      case "NEED_RENT":
        url = `${URL_DELETE_POST_NEED_RENT}/${params.id}`
        break
      default:
        break
    }
    return await DELETE({url, bearer: true})
  }
}

export default postDetailService
