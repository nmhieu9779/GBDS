const urlSever = `http://35.187.253.10:21006/api-gateway/grre-admnu/api/v1/`

const URL_OAUTH = `http://35.187.253.10:21006/api-gateway/grre-oauth`

const URL_PFMNG = `http://35.187.253.10:21006/api-gateway/grre-pfmng`

const URL_FLUPL = `http://35.187.253.10:21006/api-gateway/grre-flupl`

export const URL_SIGN_IN = `${URL_OAUTH}/oauth/token`
export const URL_SIGN_UP = `${URL_OAUTH}/api/v1/users`

export const URL_GET_USER_PROFILE = `${URL_PFMNG}/api/v1/profiles`
export const URL_GET_URI_AVATAR = `${URL_PFMNG}/api/v1/profiles/avaurl`
export const URL_EDIT_PROFILE = `${URL_PFMNG}/api/v1/profiles`

export const URL_UPLOAD_IMAGE = `${URL_FLUPL}/api/v1/storages/upload`

const url = {
  urlAddress: {
    city: urlSever + "provinces/",
    district: urlSever + "districts/",
    ward: urlSever + "wards/",
    street: urlSever + "streets/"
  },
  commingSoon: "Tính năng đang phát triển"
}

export default url
