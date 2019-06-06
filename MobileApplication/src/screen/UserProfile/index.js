import React from "react"
import {View, Text, Image, ScrollView} from "react-native"
import {connect} from "react-redux"
import SafeAreaView from "react-native-safe-area-view"
import TopBarMenu from "@src/component/top-bar-menu"
import {faCheckCircle, faSignOutAlt} from "@fortawesome/free-solid-svg-icons"
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import styles from "./styles"
import Menu from "./component/menu"
import string from "./string"

const uri =
  "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/61450068_159072175131414_3458392844530614272_n.jpg?_nc_cat=109&_nc_oc=AQnfCIECD02FZb_QbumQ4D3x04U0MkXGdDo2KjIlHYkDHM0znarNMulwHW7fUW5FbAk&_nc_ht=scontent.fhan3-2.fna&oh=a5370ab7cfcc5118fc4eedef1001eef8&oe=5D97C9BC"

const _renderAvtar = (avatarUrl) =>
  avatarUrl ? (
    <Image style={styles.avatar} source={{uri: avatarUrl}} />
  ) : (
    <FontAwesomeIcon icon={faUserCircle} />
  )

const UserProfile = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBarMenu title={"Thông tin cá nhân"} icon={[{icon: faSignOutAlt}]} titleIsLeft={true} />
      <ScrollView>
        <View style={styles.topContainer}>
          {_renderAvtar(uri)}
          <View style={styles.topNameContainer}>
            <Text style={styles.topNameText}>{props.name}</Text>
            <Text style={styles.topNameTextLabel}>{"Trang cá nhân"}</Text>
          </View>
        </View>
        <View style={styles.menuContainer}>
          <View style={styles.itemInfo}>
            <Text style={styles.itemInfoLabel}>{"Số dư trong ví"}</Text>
            <Text style={styles.priceText}>{"66.171 VND"}</Text>
          </View>
          <View style={styles.itemInfo}>
            <Text style={styles.itemInfoLabel}>{"Loại tài khoản"}</Text>
            <Text style={styles.checked}>{"Đã xác thực"}</Text>
            <FontAwesomeIcon style={styles.iconChecked} color={"#1ED760"} icon={faCheckCircle} />
          </View>
          <View style={styles.itemInfo}>
            <Text style={styles.itemInfoLabel}>{"Ngày sinh"}</Text>
            <Text>{props.birthdate}</Text>
          </View>
          <View style={styles.itemInfo}>
            <Text style={styles.itemInfoLabel}>{"Email"}</Text>
            <Text>{props.email}</Text>
            <FontAwesomeIcon style={styles.iconChecked} color={"#1ED760"} icon={faCheckCircle} />
          </View>
          <View style={[styles.itemInfo, {borderBottomWidth: 0}]}>
            <Text style={styles.itemInfoLabel}>{"Địa chỉ"}</Text>
            <Text style={styles.itemInfoText} numberOfLines={4}>
              {props.address}
            </Text>
          </View>
        </View>
        <View style={styles.menuContainer}>
          <View style={styles.itemInfo}>
            <FontAwesomeIcon style={styles.iconSocial} color="#3B5998" icon={faFacebookSquare} />
            <View style={styles.socialContainer}>
              <Text>{"Liên kết mạng xã hội"}</Text>
              <Text style={styles.topNameTextLabel}>{"Nguyễn Minh Hiếu"}</Text>
            </View>
            <Text style={styles.textManager}>{"QUẢN LÝ"}</Text>
          </View>
          <Menu data={string.menuUser} />
        </View>
        <View style={styles.menuContainer}>
          <Menu data={string.menuConfig} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const mapStateToProps = ({userProfile}) => ({
  name: userProfile.content.name,
  address: userProfile.content.address,
  email: userProfile.content.email,
  birthdate: userProfile.content.birthdate
})

const mapDispatchToProps = (dispatch) => {
  return {}
}

const UserProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile)

export default UserProfileContainer
