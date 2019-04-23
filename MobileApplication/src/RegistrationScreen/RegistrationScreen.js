import React, { Component } from "react"
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView
} from "react-native"
import ImagePicker from "react-native-image-picker"
import { connect } from "react-redux"
import { registrationAction } from "./registrationActions"
import CustomTextInput from "../Component/CustomTextInput"
import CustomButton from "../Component/CustomButton"
import {
  faUserEdit,
  faUserLock,
  faUser,
  faBuilding,
  faMailBulk,
  faPhone,
  faAddressCard
} from "@fortawesome/free-solid-svg-icons"

class Avatar extends Component {
  constructor(props) {
    super(props)

    stylesAvatar = StyleSheet.create({
      avatar: { width: "100%", height: "100%", borderRadius: 999 },
      btnImage: {
        width: 100,
        height: 100,
        borderColor: "white",
        borderWidth: 0.5,
        borderRadius: 999,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
      },
      container: {
        flex: 1,
        alignItems: "center"
      }
    })
  }

  getAvatar = (avatar, sex) => {
    if (avatar) {
      let uri = avatar
      return <Image style={stylesAvatar.avatar} source={{ uri: uri }} />
    } else {
      return (
        <Image
          style={stylesAvatar.avatar}
          source={
            sex === "Male"
              ? require("../../res/icons/male.png")
              : require("../../res/icons/female.png")
          }
        />
      )
    }
  }
  selectPhotoTapped = () => {
    let me = this
    const options = {
      title: "Select Avatar"
    }
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log("User cancelled photo picker")
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error)
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton)
      } else {
        me.handleResponse(response)
      }
    })
  }
  handleResponse = async response => {
    this.props.handleResponse(response)
  }

  render() {
    const { avatar, sex } = this.props
    return (
      <View style={stylesAvatar.container}>
        <TouchableOpacity
          style={stylesAvatar.btnImage}
          onPress={this.selectPhotoTapped.bind(this)}
        >
          {this.getAvatar(avatar, sex)}
        </TouchableOpacity>
      </View>
    )
  }
}

class Sex extends Component {
  constructor(props) {
    super(props)

    stylesSex = StyleSheet.create({
      itemSex: {
        flex: 1,
        borderWidth: 0.5,
        borderColor: "#ccc",
        textAlign: "center",
        paddingTop: 10,
        paddingBottom: 10
      },
      sexContainer: {
        flexDirection: "row",
        padding: 10,
        marginTop: 10
      }
    })

    ItemSex = props => {
      getColorBackground = () =>
        props.sex === props.label ? "rgb(58,169,171)" : "white"
      getColorLabel = () => (props.sex === props.label ? "white" : "black")
      return (
        <Text
          style={[
            stylesSex.itemSex,
            {
              borderBottomRightRadius: props.borderBottomRightRadius,
              borderTopRightRadius: props.borderTopRightRadius,
              borderBottomLeftRadius: props.borderBottomLeftRadius,
              borderTopLeftRadius: props.borderTopLeftRadius,
              backgroundColor: getColorBackground(),
              color: getColorLabel()
            }
          ]}
          onPress={props.onPress}
        >
          {props.label}
        </Text>
      )
    }
  }

  render() {
    const { sex } = this.props
    return (
      <View style={stylesSex.sexContainer}>
        <ItemSex
          label={"Male"}
          sex={sex}
          borderBottomLeftRadius={5}
          borderTopLeftRadius={5}
          onPress={() => this.props.onPress("Male")}
        />
        <ItemSex
          label={"Female"}
          sex={sex}
          onPress={() => this.props.onPress("Female")}
        />
        <ItemSex
          label={"Other"}
          sex={sex}
          borderBottomRightRadius={5}
          borderTopRightRadius={5}
          onPress={() => this.props.onPress("Other")}
        />
      </View>
    )
  }
}

class RegistrationScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      password: "",
      fullName: "",
      company: "",
      email: "",
      phone: "",
      address: "",
      isRegistration: false,
      avatar: "",
      sex: "Male"
    }
  }

  componentDidUpdate = prevProps => {
    let me = this
    if (prevProps.registration != this.props.registration) {
      if (this.props.registration.status === "failed") {
        me.setState({ isRegistration: false })
      } else {
        // me._loginAsync(this.props.login.uid)
      }
    }
  }

  render() {
    const {
      userName,
      password,
      fullName,
      company,
      email,
      phone,
      address,
      isRegistration,
      avatar,
      sex
    } = this.state
    return (
      <SafeAreaView style={styles.registration_container}>
        <ScrollView>
          <View style={styles.header_container}>
            <Text style={styles.title}>{"Registration to TMS"}</Text>
            <Avatar
              avatar={avatar}
              sex={sex}
              handleResponse={response => {
                this.setState({ avatar: response.uri })
              }}
            />
          </View>
          <View>
            <View style={styles.group_input}>
              <CustomTextInput
                inputRef={r => (this.refUserName = r)}
                icon={faUserEdit}
                placeholder={"User Name"}
                value={userName}
                onChangeText={text => this.setState({ userName: text })}
                onSubmitEditing={e => this.refPassword.focus()}
                returnKeyType={"next"}
                editable={!isRegistration}
                styleInput={{ marginLeft: 5 }}
              />
              <CustomTextInput
                inputRef={r => (this.refPassword = r)}
                icon={faUserLock}
                placeholder={"Password"}
                value={password}
                onChangeText={text => this.setState({ password: text })}
                isPassword={true}
                onSubmitEditing={e => {
                  this.refFullName.focus()
                }}
                returnKeyType={"next"}
                editable={!isRegistration}
                styleInput={{ marginLeft: 5 }}
              />
              <CustomTextInput
                inputRef={r => (this.refFullName = r)}
                icon={faUser}
                placeholder={"Full Name"}
                value={fullName}
                onChangeText={text => this.setState({ fullName: text })}
                onSubmitEditing={e => this.refCompany.focus()}
                returnKeyType={"next"}
                editable={!isRegistration}
                styleInput={{ marginLeft: 5 }}
              />
              <CustomTextInput
                inputRef={r => (this.refCompany = r)}
                icon={faBuilding}
                placeholder={"Company"}
                value={company}
                onChangeText={text => this.setState({ company: text })}
                onSubmitEditing={e => this.refEmail.focus()}
                returnKeyType={"next"}
                editable={!isRegistration}
                styleInput={{ marginLeft: 5 }}
              />
              <CustomTextInput
                inputRef={r => (this.refEmail = r)}
                icon={faMailBulk}
                placeholder={"Email"}
                value={email}
                onChangeText={text => this.setState({ email: text })}
                keyboardType={"email-address"}
                onSubmitEditing={e => this.refPhone.focus()}
                returnKeyType={"next"}
                editable={!isRegistration}
                styleInput={{ marginLeft: 5 }}
              />
              <CustomTextInput
                inputRef={r => (this.refPhone = r)}
                icon={faPhone}
                placeholder={"Phone"}
                keyboardType={"numeric"}
                value={phone}
                onChangeText={text => this.setState({ phone: text })}
                onSubmitEditing={e => this.refAddress.focus()}
                returnKeyType={"next"}
                editable={!isRegistration}
                styleInput={{ marginLeft: 5 }}
              />
              <CustomTextInput
                inputRef={r => (this.refAddress = r)}
                icon={faAddressCard}
                placeholder={"Address"}
                value={address}
                onChangeText={text => this.setState({ address: text })}
                onSubmitEditing={e => {}}
                returnKeyType={"next"}
                editable={!isRegistration}
                styleInput={{ marginLeft: 5 }}
              />
              <Sex sex={sex} onPress={sex => this.setState({ sex: sex })} />
            </View>
            <CustomButton onPress={this.onPressLogin.bind(this)}>
              {isRegistration ? (
                <ActivityIndicator size="large" color="white" />
              ) : (
                <Text style={{ color: "white" }}>{"REGISTRATION"}</Text>
              )}
            </CustomButton>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }

  onPressLogin = () => {
    const { email, password } = this.state
    let validate = this.validateEmailPassword(email, password)
    if (validate === true) {
      this.setState({ isLogin: true })
      this.props.onLogin({ email, password })
    } else {
      validate === "email"
        ? this.refEmail.focus()
        : validate === "password"
        ? this.refPassword.focus()
        : this.refName.focus()
    }
  }

  validateNameEmailPassword = (name, email, password) =>
    name ? (email ? (password ? true : "password") : "email") : "name"
}

const styles = StyleSheet.create({
  registration_container: {
    flex: 1,
    justifyContent: "center",
    margin: 20
  },
  title: {
    color: "rgb(58,169,171)",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20
  },
  group_input: { marginBottom: 30 },
  button_forgot_password_container: { marginBottom: 30 },
  header_container: { justifyContent: "center" },
  social_container: { flexDirection: "row", justifyContent: "center" }
})

const mapStateToProps = state => {
  return {
    registration: state.registrationReducers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: payload => {
      dispatch(registrationAction(payload))
    }
  }
}

const RegistrationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationScreen)
export default RegistrationContainer
