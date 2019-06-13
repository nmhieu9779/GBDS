import React, {useState, useEffect} from "react"
import {View, Text, ScrollView, TouchableOpacity} from "react-native"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import SafeAreaView from "react-native-safe-area-view"
import TopBarMenu from "@src/component/top-bar-menu"
import {faCheckCircle, faSignOutAlt, faChevronRight} from "@fortawesome/free-solid-svg-icons"
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import styles from "./styles"
import {getMenuItem} from "./string"
import {formatDate} from "@src/utilities/date"
import AvatarCirCle from "@src/component/avatar-circle"
import {removeAllItemAsyncStorage, getItemAsyncStorage} from "@src/utilities/asyncStorage"
import Card from "@src/component/card"
import NavigationService from "@src/navigation/NavigationService"
import {resetUserProfile, resetUriAvatar, resetSignIn} from "@src/redux/actions"

const ItemInfo = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        NavigationService.navigate("EditProfile")
      }}
      style={styles.itemInfo}>
      <Text style={styles.itemInfoLabel} numberOfLines={4}>
        {props.label}
      </Text>
      <Text style={styles.itemInfoText}>
        {(props.label === "Ngày sinh" && formatDate(props.content, "DD/MM/YYYY")) || props.content}
      </Text>
    </TouchableOpacity>
  )
}

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
  const [menu, setMenu] = useState({menuUser: [], menuConfig: []})

  const signOut = async () => {
    let isSignIn = await getItemAsyncStorage("IS_SIGNIN")
    if (isSignIn) {
      props.resetUserProfile()
      props.resetUriAvatar()
      props.resetSignIn()
      removeAllItemAsyncStorage()
      getMenu()
    }
  }

  useEffect(() => {
    getMenu()
  }, [])

  const getMenu = () => {
    getMenuItem().then((e) => setMenu(e))
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopBarMenu
        title={"Thông tin cá nhân"}
        icon={[{icon: faSignOutAlt}]}
        titleIsLeft={true}
        onPress={() => signOut()}
      />
      <ScrollView>
        <Card style={styles.topContainer}>
          <AvatarCirCle avatarImageUrl={props.uriAvatar} size={40} />
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => NavigationService.navigate("EditProfile")}
            style={styles.topNameContainer}>
            <Text style={styles.topNameText}>{props.name}</Text>
            <Text style={styles.topNameTextLabel}>{props.description}</Text>
          </TouchableOpacity>
        </Card>
        <Card style={styles.menuContainer}>
          <View style={styles.itemInfo}>
            <Text style={styles.itemInfoLabel}>{"Số dư trong ví"}</Text>
            <Text style={styles.priceText}>{"66.171 VND"}</Text>
          </View>
          <View style={styles.itemInfo}>
            <Text style={styles.itemInfoLabel}>{"Loại tài khoản"}</Text>
            <Text style={styles.checked}>{"Đã xác thực"}</Text>
            <FontAwesomeIcon style={styles.iconChecked} color={"#1ED760"} icon={faCheckCircle} />
          </View>
          {props.info.map(
            (item, index) => item && <ItemInfo key={index} label={item.label} content={item.content} />
          )}
        </Card>
        <Card style={styles.menuContainer}>
          <View style={styles.itemInfo}>
            <FontAwesomeIcon style={styles.iconSocial} color="#3B5998" icon={faFacebookSquare} />
            <View style={styles.socialContainer}>
              <Text>{"Liên kết mạng xã hội"}</Text>
              <Text style={styles.topNameTextLabel}>{"Nguyễn Minh Hiếu"}</Text>
            </View>
            <Text style={styles.textManager}>{"QUẢN LÝ"}</Text>
          </View>
          {menu.menuUser.map((item, index) => (
            <ItemMenu key={index} icon={item.icon} label={item.label} onPress={() => item.onPress()} />
          ))}
        </Card>
        <Card style={styles.menuContainer}>
          {menu.menuConfig.map((item, index) => (
            <ItemMenu key={index} icon={item.icon} label={item.label} onPress={() => item.onPress()} />
          ))}
        </Card>
      </ScrollView>
    </SafeAreaView>
  )
}

const mapStateToProps = (state) => {
  const userProfile = state.userProfile.userProfile.success
    ? state.userProfile.userProfile.response.content
    : {}
  return {
    uriAvatar: state.userProfile.uriAvatar.success
      ? state.userProfile.uriAvatar.response.content
      : userProfile.avatarImageUrl,
    name: userProfile.name ? userProfile.name : "Bạn chưa cập nhật thông tin",
    description: userProfile.name ? userProfile.description : "Click để cập nhật thông tin",
    info: [
      userProfile.birthdate && {label: "Ngày sinh", content: userProfile.birthdate},
      userProfile.email && {label: "Email", content: userProfile.email},
      userProfile.phone && {label: "Di động", content: userProfile.phone},
      userProfile.address && {label: "Địa chỉ", content: userProfile.address},
      userProfile.occupation && {label: "Nghề nghiệp", content: userProfile.occupation},
      userProfile.organization && {label: "Cơ quan", content: userProfile.organization}
    ]
  }
}

const mapDispatchToProps = (dispatch) => {
  let actionCreators = {resetUserProfile, resetUriAvatar, resetSignIn}
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}

const UserProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile)

export default UserProfileContainer
