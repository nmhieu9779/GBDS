import React from "react"
import {View, Text, ScrollView, TouchableOpacity} from "react-native"
import {connect} from "react-redux"
import SafeAreaView from "react-native-safe-area-view"
import TopBarMenu from "@src/component/top-bar-menu"
import {faCheckCircle, faSignOutAlt, faChevronRight} from "@fortawesome/free-solid-svg-icons"
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import styles from "./styles"
import string from "./string"
import {formatDate} from "@src/utilities/date"
import AvatarCirCle from "@src/component/avatar-circle"

const ItemInfo = (props) => (
  <View style={styles.itemInfo}>
    <Text style={styles.itemInfoLabel} numberOfLines={4}>
      {props.label}
    </Text>
    <Text style={styles.itemInfoText}>
      {(props.label === "Ngày sinh" && formatDate(props.content, "DD/MM/YYYY")) || props.content}
    </Text>
  </View>
)

const ItemMenu = (props) => (
  <TouchableOpacity onPress={() => props.onPress()} style={styles.itemInfo}>
    {props.icon && <FontAwesomeIcon style={styles.icon} color="#3B5998" icon={props.icon} />}
    <View style={styles.labelContainer}>
      <Text>{props.label}</Text>
    </View>
    <FontAwesomeIcon color={"#AAB8C2"} icon={faChevronRight} />
  </TouchableOpacity>
)

const UserProfile = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBarMenu title={"Thông tin cá nhân"} icon={[{icon: faSignOutAlt}]} titleIsLeft={true} />
      <ScrollView>
        <View style={styles.topContainer}>
          <AvatarCirCle avatarImageUrl={props.avatarImageUrl} size={40} />
          <View style={styles.topNameContainer}>
            <Text style={styles.topNameText}>{props.name}</Text>
            <Text style={styles.topNameTextLabel}>{props.description}</Text>
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
          {props.info.map((item, index) => (
            <ItemInfo key={index} label={item.label} content={item.content} />
          ))}
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
          {string.menuUser.map((item, index) => (
            <ItemMenu key={index} icon={item.icon} label={item.label} onPress={() => item.onPress()} />
          ))}
        </View>
        <View style={styles.menuContainer}>
          {string.menuConfig.map((item, index) => (
            <ItemMenu key={index} icon={item.icon} label={item.label} onPress={() => item.onPress()} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const mapStateToProps = ({userProfile}) => ({
  avatarImageUrl: userProfile.content.avatarImageUrl,
  name: userProfile.content.name,
  description: userProfile.content.description,
  info: [
    {label: "Ngày sinh", content: userProfile.content.birthdate},
    {label: "Email", content: userProfile.content.email},
    {label: "Di động", content: userProfile.content.phone},
    {label: "Địa chỉ", content: userProfile.content.address},
    {label: "Nghề nghiệp", content: userProfile.content.occupation},
    {label: "Cơ quan", content: userProfile.content.organization}
  ]
})

const mapDispatchToProps = (dispatch) => {
  return {}
}

const UserProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile)

export default UserProfileContainer
