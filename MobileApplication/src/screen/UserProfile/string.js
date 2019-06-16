import {faHistory, faCog, faUnlockAlt} from "@fortawesome/free-solid-svg-icons"
import {faClock, faBell, faLifeRing, faBookmark} from "@fortawesome/free-regular-svg-icons"
import NavigationService from "@src/navigation/NavigationService"

export const getMenuItem = (signInSuccess) => {
  let string = {
    menuUser: [
      {
        icon: faClock,
        label: "Mới xem",
        onPress: () => {
          signInSuccess ? alert("abc") : NavigationService.navigate("AuthStack")
        }
      },
      {
        icon: faHistory,
        label: "Các bài đã đăng",
        onPress: () => {
          signInSuccess ? alert("abc") : NavigationService.navigate("AuthStack")
        }
      },
      {
        icon: faBookmark,
        label: "Các bài đã lưu",
        onPress: () => {
          signInSuccess ? alert("abc") : NavigationService.navigate("AuthStack")
        }
      },
      {
        icon: faBell,
        label: "Thông báo",
        onPress: () => {
          signInSuccess ? alert("abc") : NavigationService.navigate("AuthStack")
        }
      }
    ],
    menuConfig: [
      {
        icon: faLifeRing,
        label: "Trợ giúp",
        onPress: () => {
          signInSuccess ? alert("abc") : NavigationService.navigate("AuthStack")
        }
      },
      {
        icon: faCog,
        label: "Cài đặt",
        onPress: () => {
          signInSuccess ? alert("abc") : NavigationService.navigate("AuthStack")
        }
      },
      {
        icon: faUnlockAlt,
        label: "Đổi mật khẩu",
        onPress: () => {
          signInSuccess ? alert("abc") : NavigationService.navigate("AuthStack")
        }
      }
    ]
  }
  return string
}
