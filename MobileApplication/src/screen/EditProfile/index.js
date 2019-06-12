import React, {useState, useEffect} from "react"
import {View, ScrollView, Text, TextInput, TouchableOpacity} from "react-native"
import SafeAreaView from "react-native-safe-area-view"
import TopBarMenu from "@src/component/top-bar-menu"
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import AvatarCirCle from "@src/component/avatar-circle"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import styles from "./styles"
import TextInputCustom from "@src/component/text-input-custom"
import {WIDTH, moderateScale} from "@src/utilities/scale"
import {getDay, getMonth, getYear, formatDayMonth} from "@src/utilities/date"
import {uploadImage, editProfile} from "@src/redux/actions"
import {getItemAsyncStorage} from "@src/utilities/asyncStorage"

const GenderItem = (props) => (
  <TouchableOpacity
    onPress={() => props.setGender(props.value)}
    activeOpacity={1}
    style={[
      styles.genderItemContainer,
      {backgroundColor: props.gender === props.value ? "#24C8EC" : "white"}
    ]}>
    <Text style={{color: props.gender === props.value ? "white" : "black"}}>{props.value}</Text>
  </TouchableOpacity>
)

const GenderInput = (props) => {
  return (
    <View style={styles.birthdateContainer}>
      <Text style={styles.labelBirthdate}>{"Giới tính"}</Text>
      <View style={styles.birthdateInputItemContainer}>
        <GenderItem value={"Nam"} gender={props.gender} setGender={props.setGender.bind(this)} />
        <GenderItem value={"Nữ"} gender={props.gender} setGender={props.setGender.bind(this)} />
        <GenderItem value={"Khác"} gender={props.gender} setGender={props.setGender.bind(this)} />
      </View>
    </View>
  )
}

const EditProfile = (props) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [occupation, setOccupation] = useState("")
  const [organization, setOrganization] = useState("")
  const [gender, setGender] = useState("")

  useEffect(() => {
    initState()
  }, [])

  const initState = async () => {
    const userOauth = await getItemAsyncStorage("USER_OAUTH")

    setName(props.name)
    setDescription(props.description)
    setDay(getDay(props.birthdate))
    setMonth(getMonth(props.birthdate))
    setYear(getYear(props.birthdate))
    setEmail(props.email || userOauth.email)
    setPhone(props.phone)
    setAddress(props.address)
    setOccupation(props.occupation)
    setOrganization(props.organization)
    setGender(props.gender)
  }

  useEffect(() => {
    props.uploadImageSuccess &&
      !props.editProfileSuccess &&
      props.editProfile({
        body: {avatarImageUrl: props.avatarImageUrl, email: props.email || email},
        isCreate: props.isNewProfile
      })
  }, [props.uploadImageSuccess])

  const editContentType = (contentType) => {
    let temp = contentType
    temp = temp.replace("image/", ".")
    return temp
  }

  const handleResponse = async ({type, uri}) => {
    let formData = new FormData()
    formData.append("file", {
      uri: uri,
      name: `avatar${editContentType(type)}`,
      type: type
    })
    formData.append(
      "uploadAs",
      `avatar/${props.id ? props.id : Date.parse(new Date())}${editContentType(type)}`
    )
    props.uploadImage(formData)
  }

  const onPressSave = () => {
    let body = {
      address: address,
      birthdate:
        (day && month && year && `${year}-${formatDayMonth(month)}-${formatDayMonth(day)} 00:00:00`) || null,
      description: description,
      email: props.email,
      gender: gender,
      name: name,
      occupation: occupation,
      organization: organization,
      phone: phone
    }
    props.editProfile({
      body: body,
      isCreate: props.isNewProfile
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopBarMenu
        title={"Chỉnh sửa thông tin cá nhân"}
        icon={[{icon: faArrowLeft}]}
        onPress={() => props.navigation.goBack()}
      />
      <ScrollView>
        <View style={styles.avatarContainer}>
          <AvatarCirCle
            avatarImageUrl={props.uriAvatar}
            size={80}
            enableEdit={true}
            onChange={handleResponse.bind(this)}
          />
        </View>
        <View style={styles.infoContainer}>
          <TextInputCustom
            marginBottom={moderateScale(5)}
            onChangeText={(text) => setName(text)}
            value={name}
            width={WIDTH - moderateScale(10)}
            label={"Họ và tên"}
          />
          <GenderInput gender={gender} setGender={(e) => setGender(e)} />
          <TextInputCustom
            marginBottom={moderateScale(5)}
            onChangeText={(text) => setDescription(text)}
            value={description}
            width={WIDTH - moderateScale(10)}
            label={"Mô tả"}
          />
          <View style={styles.birthdateContainer}>
            <Text style={styles.labelBirthdate}>{"Ngày sinh"}</Text>
            <View style={styles.birthdateInputItemContainer}>
              <TextInput
                value={day}
                placeholder={"Ngày"}
                maxLength={2}
                style={styles.inputBirthdate}
                keyboardType={"numeric"}
                onChangeText={(text) => setDay(text)}
              />
              <TextInput
                value={month}
                placeholder={"Tháng"}
                maxLength={2}
                style={styles.inputBirthdate}
                keyboardType={"numeric"}
                onChangeText={(text) => setMonth(text)}
              />
              <TextInput
                value={year}
                placeholder={"Năm"}
                maxLength={4}
                style={styles.inputBirthdate}
                keyboardType={"numeric"}
                onChangeText={(text) => setYear(text)}
              />
            </View>
          </View>
          <TextInputCustom
            marginBottom={moderateScale(5)}
            onChangeText={(text) => setEmail(text)}
            value={email}
            width={WIDTH - moderateScale(10)}
            label={"Email"}
            editable={false}
          />
          <TextInputCustom
            marginBottom={moderateScale(5)}
            onChangeText={(text) => setPhone(text)}
            value={phone}
            width={WIDTH - moderateScale(10)}
            label={"Số điện thoại"}
          />
          <TextInputCustom
            marginBottom={moderateScale(5)}
            onChangeText={(text) => setAddress(text)}
            value={address}
            width={WIDTH - moderateScale(10)}
            label={"Địa chỉ"}
          />
          <TextInputCustom
            marginBottom={moderateScale(5)}
            onChangeText={(text) => setOccupation(text)}
            value={occupation}
            width={WIDTH - moderateScale(10)}
            label={"Nghề nghiệp"}
          />
          <TextInputCustom
            marginBottom={moderateScale(5)}
            onChangeText={(text) => setOrganization(text)}
            value={organization}
            width={WIDTH - moderateScale(10)}
            label={"Cơ quan"}
          />
        </View>
      </ScrollView>
      <TouchableOpacity activeOpacity={0.8} style={styles.btnSaveContainer} onPress={onPressSave.bind(this)}>
        <Text style={styles.btnSaveText}>{"LƯU"}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const mapStateToProps = (state) => {
  const userProfile = state.userProfile.userProfile.success
    ? state.userProfile.userProfile.response.content
    : {}
  const editProfile = state.editProfile
  return {
    uriAvatar: state.userProfile.uriAvatar.success
      ? state.userProfile.uriAvatar.response.content
      : userProfile.avatarImageUrl,
    name: userProfile.name,
    description: userProfile.name,
    birthdate: userProfile.birthdate,
    email: userProfile.email,
    phone: userProfile.phone,
    address: userProfile.address,
    occupation: userProfile.occupation,
    organization: userProfile.organization,
    isNewProfile: !state.userProfile.userProfile.success && !state.userProfile.uriAvatar.success,
    id: userProfile.id,
    uploadImageSuccess: editProfile.uploadImage.success,
    avatarImageUrl: editProfile.uploadImage.success && editProfile.uploadImage.response.content,
    editProfileSuccess: editProfile.editProfile.success,
    gender: userProfile.gender
  }
}

const mapDispatchToProps = (dispatch) => {
  let actionCreators = {uploadImage, editProfile}
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}

const EditProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile)

export default EditProfileContainer
