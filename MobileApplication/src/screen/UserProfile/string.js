import {faHistory, faCog} from "@fortawesome/free-solid-svg-icons"
import {faClock, faBell, faLifeRing, faBookmark} from "@fortawesome/free-regular-svg-icons"

const string = {
  menuUser: [
    {icon: faClock, label: "Mới xem", onPress: () => {}},
    {icon: faHistory, label: "Các bài đã đăng", onPress: () => {}},
    {icon: faBookmark, label: "Các bài đã lưu", onPress: () => {}},
    {icon: faBell, label: "Thông báo", onPress: () => {}}
  ],
  menuConfig: [
    {icon: faLifeRing, label: "Trợ giúp", onPress: () => {}},
    {icon: faCog, label: "Cài đặt", onPress: () => {}}
  ]
}

export default string
