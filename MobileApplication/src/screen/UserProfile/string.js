import {faHistory, faCog} from "@fortawesome/free-solid-svg-icons"
import {faClock, faBell, faLifeRing, faBookmark} from "@fortawesome/free-regular-svg-icons"
import NavigationService from "@src/navigation/NavigationService"
import {getItemAsyncStorage} from "@src/utilities/asyncStorage"

export const getMenuItem = async () => {
  let isSignIn = await getItemAsyncStorage("IS_SIGNIN")
  let string = {
    menuUser: [
      {
        icon: faClock,
        label: "Mới xem",
        onPress: () => {
          isSignIn ? alert("abc") : NavigationService.navigate("AuthStack")
        }
      },
      {
        icon: faHistory,
        label: "Các bài đã đăng",
        onPress: () => {
          isSignIn ? alert("abc") : NavigationService.navigate("AuthStack")
        }
      },
      {
        icon: faBookmark,
        label: "Các bài đã lưu",
        onPress: () => {
          isSignIn ? alert("abc") : NavigationService.navigate("AuthStack")
        }
      },
      {
        icon: faBell,
        label: "Thông báo",
        onPress: () => {
          isSignIn ? alert("abc") : NavigationService.navigate("AuthStack")
        }
      }
    ],
    menuConfig: [
      {
        icon: faLifeRing,
        label: "Trợ giúp",
        onPress: () => {
          isSignIn ? alert("abc") : NavigationService.navigate("AuthStack")
        }
      },
      {
        icon: faCog,
        label: "Cài đặt",
        onPress: () => {
          isSignIn ? alert("abc") : NavigationService.navigate("AuthStack")
        }
      }
    ]
  }
  return string
}
