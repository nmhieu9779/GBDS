import {URL_SIGN_IN, URL_SIGN_UP, URL_GET_INFO_FACEBOOK, URL_SIGN_IN_WITH_3RDPARTY} from "@src/constant/url"
import {POST, GET} from "@src/redux/server"

const Authservice = {
  signIn: async (param) => {
    const url = param.with3RdParty ? URL_SIGN_IN_WITH_3RDPARTY : URL_SIGN_IN
    const params = param.with3RdParty
      ? {
          payload: param.email
        }
      : {
          scope: "ui",
          grant_type: "password",
          username: param.email,
          password: param.password
        }
    return param.with3RdParty ? await POST({url, params}) : await GET({url: url, basic: true, params})
  },
  signUp: async ({email, password}) => {
    const url = URL_SIGN_UP
    const body = {email: email, password: password}
    return await POST({url, body})
  },
  getInfoFacebook: async (token) => {
    const url = URL_GET_INFO_FACEBOOK
    const params = {fields: `id,name,email`, access_token: token}
    return await GET({url, params})
  }
}

export default Authservice
