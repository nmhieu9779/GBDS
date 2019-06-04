import React from "react"
import {View, Text, Image, ScrollView, TouchableOpacity, TextInput} from "react-native"
import SafeAreaView from "react-native-safe-area-view"
import TopBarMenu from "@src/component/top-bar-menu"
import {
  faCheckCircle,
  faHistory,
  faChevronRight,
  faCog,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons"
import {faClock, faBell, faLifeRing, faBookmark} from "@fortawesome/free-regular-svg-icons"
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import styles from "./styles"

const uri =
  "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/61450068_159072175131414_3458392844530614272_n.jpg?_nc_cat=109&_nc_oc=AQnfCIECD02FZb_QbumQ4D3x04U0MkXGdDo2KjIlHYkDHM0znarNMulwHW7fUW5FbAk&_nc_ht=scontent.fhan3-2.fna&oh=a5370ab7cfcc5118fc4eedef1001eef8&oe=5D97C9BC"

const _renderAvtar = (avatarUrl) =>
  avatarUrl ? (
    <Image style={styles.avatar} source={{uri: avatarUrl}} />
  ) : (
    <FontAwesomeIcon icon={faUserCircle} />
  )

const UserProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBarMenu title={"Thông tin cá nhân"} icon={[{icon: faSignOutAlt}]} titleIsLeft={true} />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            backgroundColor: "white",
            padding: 10
          }}>
          {_renderAvtar(uri)}
          <View style={{marginLeft: 5}}>
            <Text style={{fontSize: 20}}>{"Nguyễn Minh Hiếu"}</Text>
            <Text style={{color: "rgb(144, 148, 156)"}}>{"Trang cá nhân"}</Text>
          </View>
        </View>
        <View style={{backgroundColor: "white", marginTop: 5}}>
          <View style={styles.itemInfo}>
            <Text style={{flex: 1}}>{"Số dư trong ví"}</Text>
            <Text style={{fontSize: 25}}>{"66.171 VND"}</Text>
          </View>
          <View style={styles.itemInfo}>
            <Text style={{flex: 1}}>{"Loại tài khoản"}</Text>
            <Text style={{color: "#1ED760"}}>{"Đã xác thực"}</Text>
            <FontAwesomeIcon style={{marginLeft: 3}} color={"#1ED760"} icon={faCheckCircle} />
          </View>
          <View style={styles.itemInfo}>
            <Text style={{flex: 1}}>{"Số CMND/CCCD"}</Text>
            <Text style={{}}>{"******433"}</Text>
            <FontAwesomeIcon style={{marginLeft: 3}} color={"#1ED760"} icon={faCheckCircle} />
          </View>
          <View style={styles.itemInfo}>
            <Text style={{flex: 1}}>{"Ngày sinh"}</Text>
            <Text style={{}}>{"25/09/1997"}</Text>
          </View>
          <View style={styles.itemInfo}>
            <Text style={{flex: 1}}>{"Email"}</Text>
            <Text style={{}}>{"nmhieu9779@gmaiil.com"}</Text>
            <FontAwesomeIcon style={{marginLeft: 3}} color={"#1ED760"} icon={faCheckCircle} />
          </View>
          <View style={[styles.itemInfo, {borderBottomWidth: 0}]}>
            <Text style={{flex: 1}}>{"Địa chỉ"}</Text>
            <Text style={{flex: 1}} numberOfLines={3}>
              {"226, đường 48, khu phố 6, phường Hiệp Bình Chánh, quận Thủ Đức, TP Hồ Chí Minh"}
            </Text>
          </View>
        </View>
        <View style={{backgroundColor: "white", marginTop: 5}}>
          <View style={styles.itemInfo}>
            <FontAwesomeIcon style={{marginRight: 10}} color="#3B5998" icon={faFacebookSquare} />
            <View style={{flex: 1}}>
              <Text>{"Liên kết mạng xã hội"}</Text>
              <Text style={{color: "rgb(144, 148, 156)"}}>{"Nguyễn Minh Hiếu"}</Text>
            </View>
            <Text style={{color: "#4285F4"}}>{"QUẢN LÝ"}</Text>
          </View>
          <View style={styles.itemInfo}>
            <FontAwesomeIcon style={{marginRight: 10}} color="#3B5998" icon={faClock} />
            <View style={{flex: 1}}>
              <Text>{"Mới xem"}</Text>
            </View>
            <FontAwesomeIcon color={"#AAB8C2"} icon={faChevronRight} />
          </View>
          <View style={styles.itemInfo}>
            <FontAwesomeIcon style={{marginRight: 10}} color="#3B5998" icon={faHistory} />
            <View style={{flex: 1}}>
              <Text>{"Các bài đã đăng"}</Text>
            </View>
            <FontAwesomeIcon color={"#AAB8C2"} icon={faChevronRight} />
          </View>
          <View style={styles.itemInfo}>
            <FontAwesomeIcon style={{marginRight: 10}} color="#3B5998" icon={faBookmark} />
            <View style={{flex: 1}}>
              <Text>{"Các bài đã lưu"}</Text>
            </View>
            <FontAwesomeIcon color={"#AAB8C2"} icon={faChevronRight} />
          </View>
          <View style={[styles.itemInfo, {borderBottomWidth: 0}]}>
            <FontAwesomeIcon style={{marginRight: 10}} color="#3B5998" icon={faBell} />
            <View style={{flex: 1}}>
              <Text>{"Thông báo"}</Text>
            </View>
            <FontAwesomeIcon color={"#AAB8C2"} icon={faChevronRight} />
          </View>
        </View>
        <View style={{backgroundColor: "white", marginTop: 5}}>
          <View style={styles.itemInfo}>
            <FontAwesomeIcon style={{marginRight: 10}} color="#3B5998" icon={faLifeRing} />
            <View style={{flex: 1}}>
              <Text>{"Trợ giúp"}</Text>
            </View>
            <FontAwesomeIcon color={"#AAB8C2"} icon={faChevronRight} />
          </View>
          <View style={[styles.itemInfo, {borderBottomWidth: 0}]}>
            <FontAwesomeIcon style={{marginRight: 10}} color="#3B5998" icon={faCog} />
            <View style={{flex: 1}}>
              <Text>{"Cài đặt"}</Text>
            </View>
            <FontAwesomeIcon color={"#AAB8C2"} icon={faChevronRight} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default UserProfile
