import { Dimensions } from "react-native"

const urlSever = "http://35.187.253.10:21006/api-gateway/grre-admnu/api/v1/"

const constants = {
  urlAddress: {
    city: urlSever + "provinces/",
    district: urlSever + "districts/",
    ward: urlSever + "wards/",
    street: urlSever + "streets/"
  },
  commingSoon: "Tính năng đang phát triển",
  width: Dimensions.get("screen").width,
  height: Dimensions.get("screen").height,
  ForSalePostScreen: {
    labelStep: [
      { length: 7, label: "1", isFirst: true },
      { length: 7, label: "2" },
      { length: 7, label: "3" },
      { length: 7, label: "4" },
      { length: 7, label: "5" },
      { length: 7, label: "6" },
      { length: 7, label: "7", isLast: true }
    ],
    step3: {},
    step4: {},
    step5: {},
    step6: {},
    step7: {}
  }
}

export default constants
