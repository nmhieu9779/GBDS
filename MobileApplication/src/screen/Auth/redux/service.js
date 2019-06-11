import {URL_SIGN_IN, URL_SIGN_UP} from "@src/constant/url"
import {post} from "@src/redux/server"

function* signIn({email, password}) {
  const url = URL_SIGN_IN
  const auth = {
    username: "T-GRRE-CLIENT-MM-01",
    password: "tgrreclientmm01"
  }
  const params = {
    scope: "ui",
    grant_type: "password",
    username: email,
    password: password
  }

  return yield post({url, auth, params})
}
function* signUp({email, password}) {
  const url = URL_SIGN_UP
  const body = {email: email, password: password}

  return yield post({url, body})
}
export {signIn, signUp}
