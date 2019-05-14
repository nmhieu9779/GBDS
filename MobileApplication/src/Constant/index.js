import { Dimensions } from "react-native"

const urlSever = "http://35.187.253.10:21006/api-gateway/grre-admnu/api/v1/"

const constants = {
  urlAddress: {
    city: urlSever + "provinces/",
    district: urlSever + "districts/",
    ward: urlSever + "wards/",
    street: urlSever + "streets/"
  },
  address: {
    city: {
      title: "-- Tỉnh/thành phố --",
      label: "Tỉnh/thành phố"
    },
    district: {
      title: "-- Quận/Huyện --",
      label: "Quận/Huyện"
    },
    ward: {
      title: "-- Phường/Xã --",
      label: "Phường/Xã"
    },
    street: {
      title: "-- Đường/Phố --",
      label: "Đường/Phố"
    }
  },
  commingSoon: "Tính năng đang phát triển",
  width: Dimensions.get("screen").width,
  height: Dimensions.get("screen").height,
  authScreen: {
    textSignIn: "Đăng nhập",
    textSignUp: "Đăng ký",
    email: "Email",
    password: "Mật khẩu",
    fullName: "Họ và tên",
    telephoneNumber: "Số điện thoại",
    forgotPassword: "Quên mật khẩu?",
    or: "Hoặc"
  }
}

export default constants
