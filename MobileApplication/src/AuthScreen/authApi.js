let base64 = require("base-64")

function* signIn(data) {
  const { email, password } = data
  let responseSignIn = {}
  let headers = new Headers()
  headers.set(
    "Authorization",
    "Basic " + base64.encode("T-GRRE-CLIENT-MM-01" + ":" + "tgrreclientmm01")
  )
  let url =
    "http://35.187.253.10:21006/api-gateway/grre-oauth/oauth/token?scope=ui&grant_type=password&username=" +
    email +
    "&password=" +
    password
  yield fetch(url, { method: "POST", headers: headers })
    .then(response => {
      responseSignIn.isSuccess = response.ok
      return response.json()
    })
    .then(responseJson => {
      responseSignIn = responseSignIn.isSuccess
        ? {
            ...responseSignIn,
            accessToken: responseJson.access_token
          }
        : {
            ...responseSignIn,
            message: responseJson.error_description
          }
    })
  return responseSignIn
}
function* signUp(data) {
  const { email, password } = data
  let responseSignUp = {}
  // let headers = new Headers()
  // headers.set(
  //   "Authorization",
  //   "Basic " + base64.encode("T-GRRE-CLIENT-MM-01" + ":" + "tgrreclientmm01")
  // )
  let url = "http://www.mocky.io/v2/5cc6ddcb3200006700b94f0d"
  yield fetch(url)
    .then(response => {
      responseSignUp.isSuccess = response.ok
      return response.json()
    })
    .then(responseJson => {
      responseSignUp = responseSignUp.isSuccess
        ? {
            ...responseSignUp
          }
        : {
            ...responseSignUp
          }
    })
  return responseSignUp
}
export const Api = { signIn, signUp }
