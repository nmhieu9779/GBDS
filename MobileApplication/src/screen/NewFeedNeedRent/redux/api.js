const axios = require("axios")

function* fetchPostNeedRentHome() {
  return yield axios
    .get("http://www.mocky.io/v2/5ceffe1f3000001b303cd47b")
    .then((response) => response)
    .catch((error) => error)
}

export const Api = {fetchPostNeedRentHome}
