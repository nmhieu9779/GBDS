const axios = require("axios")

function* signIn(data) {
  const { email, password } = data
  const url = "http://35.187.253.10:21006/api-gateway/grre-oauth/oauth/token"
  return yield axios
    .post(url, null, {
      auth: {
        username: "T-GRRE-CLIENT-MM-01",
        password: "tgrreclientmm01"
      },
      params: {
        scope: "ui",
        grant_type: "password",
        username: email,
        password: password
      }
    })
    .then(response => response)
    .catch(error => error)
}
function* signUp(data) {
  const { email, password } = data
  let url = "http://www.mocky.io/v2/5cea755333000069107c381f"
  return yield axios
    .post(url)
    .then(response => response)
    .catch(error => error)
}
export const Api = { signIn, signUp }
