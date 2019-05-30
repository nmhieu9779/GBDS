import constants from "@src/constant"
const axios = require("axios")

function* getCity() {
  return yield axios
    .get(constants.urlAddress.city)
    .then((response) => response)
    .catch((error) => error)
}

function* getDistrict(cityId) {
  return yield axios
    .get(constants.urlAddress.district + cityId)
    .then((response) => response)
    .catch((error) => error)
}

function* getWard(cityId, districtId) {
  return yield axios
    .get(constants.urlAddress.ward + cityId + "/" + districtId)
    .then((response) => response)
    .catch((error) => error)
}

function* getStreet(cityId, districtId) {
  return yield axios
    .get(constants.urlAddress.street + cityId + "/" + districtId)
    .then((response) => response)
    .catch((error) => error)
}

export const Api = {getCity, getDistrict, getWard, getStreet}
