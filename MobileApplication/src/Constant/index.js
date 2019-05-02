import { Dimensions } from "react-native"

const constants = {
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
