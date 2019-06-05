import url from "@src/constant"
const axios = require("axios")

function* getCity() {
  return yield axios
    .get(url.urlAddress.city)
    .then((response) => response)
    .catch((error) => error)
}

function* getDistrict(cityId) {
  return yield axios
    .get(url.urlAddress.district + cityId)
    .then((response) => response)
    .catch((error) => error)
}

function* getWard(cityId, districtId) {
  return yield axios
    .get(url.urlAddress.ward + cityId + "/" + districtId)
    .then((response) => response)
    .catch((error) => error)
}

function* getStreet(cityId, districtId) {
  return yield axios
    .get(url.urlAddress.street + cityId + "/" + districtId)
    .then((response) => response)
    .catch((error) => error)
}

export const Api = {getCity, getDistrict, getWard, getStreet}
