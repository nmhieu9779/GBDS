import {URL_GET_NOTI} from "@src/constant/url"
import {GET} from "@src/redux/server"

const notificationService = {
  getNotification: async (param) => {
    let url = `${URL_GET_NOTI}`
    const params = {user: param.email}
    return await GET({url, params, bearer: true})
  }
}

export default notificationService
