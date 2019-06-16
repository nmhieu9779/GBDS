import {faHistory, faCog, faUnlockAlt} from "@fortawesome/free-solid-svg-icons"
import {faClock, faBell, faLifeRing, faBookmark} from "@fortawesome/free-regular-svg-icons"
import NavigationService from "@src/navigation/NavigationService"

export const getMenuItem = (signInSuccess) => {
  let string = {
    menuUser: [
      {
        icon: faClock,
        label: "Mới xem"
      },
      {
        icon: faHistory,
        label: "Các bài đã đăng"
      },
      {
        icon: faBookmark,
        label: "Các bài đã lưu"
      },
      {
        icon: faBell,
        label: "Thông báo"
      }
    ],
    menuConfig: [
      {
        icon: faLifeRing,
        label: "Trợ giúp"
      },
      {
        icon: faCog,
        label: "Cài đặt"
      },
      {
        icon: faUnlockAlt,
        label: "Đổi mật khẩu"
      }
    ]
  }
  return string
}
