import React, {useState, useEffect} from "react"
import {View, ScrollView, Text, TextInput, TouchableOpacity} from "react-native"
import SafeAreaView from "react-native-safe-area-view"
import TopBarMenu from "@src/component/top-bar-menu"
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import AvatarCirCle from "@src/component/avatar-circle"
import {connect} from "react-redux"
import styles from "./styles"
import TextInputCustom from "@src/component/text-input-custom"
import {width, moderateScale} from "@src/utilities/scale"
import {getDay, getMonth, getYear} from "@src/utilities/date"
import {getItemAsyncStorage} from "@src/utilities/asyncStorage"
import {onUploadImage, onUploadAvatar, onEditAvatar} from "./redux/actions"

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
    setName(props.name)
    setDescription(props.description)
    setDay(getDay(props.birthdate))
    setMonth(getMonth(props.birthdate))
    setYear(getYear(props.birthdate))
    setEmail(props.email)
    setPhone(props.phone)
    setAddress(props.address)
    setOccupation(props.occupation)
    setOrganization(props.organization)
    setGender(props.gender)
  }, [])

  useEffect(() => {
    props.avatarImageUrl && editAvatar(props.avatarImageUrl)
  }, [props.avatarImageUrl])

  const editAvatar = async (avatarImageUrl) => {
    let avatar = await getItemAsyncStorage("AVATAR")
    let userOauth = await getItemAsyncStorage("USER_OAUTH")
    avatar
      ? props.editAvatar({avatarImageUrl: avatarImageUrl, email: userOauth.email})
      : props.uploadAvatar({avatarImageUrl: avatarImageUrl, email: userOauth.email})
  }

  const editContentType = (contentType) => {
    let temp = contentType
    temp = temp.replace("image/", ".")
    return temp
  }

  const handleResponse = async ({type, uri}) => {
    let userOauth = await getItemAsyncStorage("USER_OAUTH")
    let formData = new FormData()
    formData.append("file", {
      uri: uri,
      name: `avatar${editContentType(type)}`,
      type: type
    })
    formData.append("uploadAs", `avatar/${userOauth.userId}${editContentType(type)}`)
    props.uploadImage(formData)
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopBarMenu title={"Chỉnh sửa thông tin cá nhân"} icon={[{icon: faArrowLeft}]} />
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
            width={width - moderateScale(10)}
            label={"Họ và tên"}
          />
          <GenderInput gender={gender} setGender={(e) => setGender(e)} />
          <TextInputCustom
            marginBottom={moderateScale(5)}
            onChangeText={(text) => setDescription(text)}
            value={description}
            width={width - moderateScale(10)}
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
            width={width - moderateScale(10)}
            label={"Email"}
          />
          <TextInputCustom
            marginBottom={moderateScale(5)}
            onChangeText={(text) => setPhone(text)}
            value={phone}
            width={width - moderateScale(10)}
            label={"Số điện thoại"}
          />
          <TextInputCustom
            marginBottom={moderateScale(5)}
            onChangeText={(text) => setAddress(text)}
            value={address}
            width={width - moderateScale(10)}
            label={"Địa chỉ"}
          />
          <TextInputCustom
            marginBottom={moderateScale(5)}
            onChangeText={(text) => setOccupation(text)}
            value={occupation}
            width={width - moderateScale(10)}
            label={"Nghề nghiệp"}
          />
          <TextInputCustom
            marginBottom={moderateScale(5)}
            onChangeText={(text) => setOrganization(text)}
            value={organization}
            width={width - moderateScale(10)}
            label={"Cơ quan"}
          />
        </View>
      </ScrollView>
      <TouchableOpacity activeOpacity={0.8} style={styles.btnSaveContainer}>
        <Text style={styles.btnSaveText}>{"LƯU"}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const mapStateToProps = ({userProfile, editProfile}) => ({
  uriAvatar: userProfile.uriAvatar,
  name: userProfile.content.name,
  description: userProfile.content.description,
  birthdate: userProfile.content.birthdate,
  email: userProfile.content.email,
  phone: userProfile.content.phone,
  address: userProfile.content.address,
  occupation: userProfile.content.occupation,
  organization: userProfile.content.organization,
  avatarImageUrl: editProfile.avatarImageUrl
})

const mapDispatchToProps = (dispatch) => {
  return {
    uploadImage: (data) => {
      dispatch(onUploadImage(data))
    },
    uploadAvatar: (data) => {
      dispatch(onUploadAvatar(data))
    },
    editAvatar: (data) => {
      dispatch(onEditAvatar(data))
    }
  }
}

const EditProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile)

export default EditProfileContainer
