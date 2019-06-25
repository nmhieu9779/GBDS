import React, {useState, useEffect} from "react"
import {View, Text, ScrollView, TouchableOpacity, TextInput} from "react-native"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import SafeAreaView from "react-native-safe-area-view"
import TopBarMenu from "@src/component/top-bar-menu"
import {faCheckCircle, faSignOutAlt, faChevronRight} from "@fortawesome/free-solid-svg-icons"
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import styles from "./styles"
import {string} from "./string"
import AvatarCirCle from "@src/component/avatar-circle"
import {asyncStorage, scale, date} from "@src/utilities"
import Card from "@src/component/card"
import NavigationService from "@src/navigation/NavigationService"
import {resetUserProfile, resetUriAvatar, resetSignIn, changePassword} from "@src/redux/actions"
import Modal from "react-native-modal"
import {error} from "@src/utilities/message-error"

const ChangePassword = (props) => {
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")

  useEffect(() => {
    if (!props.isVisiable) {
      setNewPassword("")
      setOldPassword("")
    }
  }, [props.isVisiable])

  return (
    <Modal
      isVisible={props.isVisiable}
      style={styles.modalContainer}
      deviceHeight={scale.HEIGHT}
      onBackdropPress={props.onPressClose.bind(this)}>
      <Card style={styles.modalContentContainer}>
        <TextInput
          style={styles.modalInput}
          placeholder={"Mật khẩu cũ"}
          value={oldPassword}
          onChangeText={(text) => setOldPassword(text)}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.modalInput}
          placeholder={"Mật khẩu mới"}
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={props.onChangePassword({newPassword: newPassword, oldPassword: oldPassword})}
          style={styles.modalBtnContainer}>
          <Text style={styles.modalBtnText}>{"Đổi mật khẩu"}</Text>
        </TouchableOpacity>
      </Card>
    </Modal>
  )
}

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
        {(props.label === "Ngày sinh" && date.formatDate(props.content, "DD/MM/YYYY")) || props.content}
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
  const [menu, setMenu] = useState({menuUser: string.menuUser, menuConfig: string.menuConfig})
  const [isVisiableChangePassword, setIsVisiableChangePassword] = useState(false)

  const signOut = async () => {
    let isSignIn = await asyncStorage.getItemAsyncStorage("IS_SIGNIN")
    if (isSignIn) {
      props.resetUserProfile()
      props.resetUriAvatar()
      props.resetSignIn()
      asyncStorage.removeAllItemAsyncStorage()
      setMenu(getMenuItem(false))
    }
  }

  const onPressMenu = (label) => () => {
    if (props.signInSuccess) {
      switch (label) {
        case "Đổi mật khẩu":
          setIsVisiableChangePassword(true)
          break

        default:
          props.isNewProfile && error()
          break
      }
    } else {
      NavigationService.navigate("AuthStack")
    }
  }

  onPressTop = () => {
    if (props.signInSuccess) {
      props.isNewProfile ? props.navigation.navigate("EditProfile") : alert("a")
    } else {
      props.navigation.navigate("AuthStack")
    }
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
        <ChangePassword
          isVisiable={isVisiableChangePassword}
          onPressClose={() => setIsVisiableChangePassword(false)}
          onChangePassword={(params) => () => {
            props.changePassword({...params, email: props.email})
            setIsVisiableChangePassword(false)
          }}
        />
        <Card style={styles.topContainer}>
          <AvatarCirCle avatarImageUrl={props.uriAvatar} size={40} />
          <TouchableOpacity activeOpacity={1} onPress={onPressTop.bind()} style={styles.topNameContainer}>
            <Text style={styles.topNameText}>{props.name}</Text>
            <Text style={styles.topNameTextLabel}>{props.description}</Text>
          </TouchableOpacity>
        </Card>
        <Card style={styles.menuContainer}>
          {/* <View style={styles.itemInfo}>
            <Text style={styles.itemInfoLabel}>{"Số dư trong ví"}</Text>
            <Text style={styles.priceText}>{"66.171 VND"}</Text>
          </View>
          <View style={styles.itemInfo}>
            <Text style={styles.itemInfoLabel}>{"Loại tài khoản"}</Text>
            <Text style={styles.checked}>{"Đã xác thực"}</Text>
            <FontAwesomeIcon style={styles.iconChecked} color={"#1ED760"} icon={faCheckCircle} />
          </View> */}
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
            <ItemMenu key={index} icon={item.icon} label={item.label} onPress={onPressMenu(item.label)} />
          ))}
        </Card>
        <Card style={styles.menuContainer}>
          {menu.menuConfig.map((item, index) => (
            <ItemMenu key={index} icon={item.icon} label={item.label} onPress={onPressMenu(item.label)} />
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
    ],
    signInSuccess: state.auth.signIn.success,
    email: state.auth.signIn.success && state.auth.signIn.response.email,
    isNewProfile: !state.userProfile.userProfile.success && !state.userProfile.uriAvatar.success
  }
}

const mapDispatchToProps = (dispatch) => {
  let actionCreators = {resetUserProfile, resetUriAvatar, resetSignIn, changePassword}
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}

const UserProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile)

export default UserProfileContainer
