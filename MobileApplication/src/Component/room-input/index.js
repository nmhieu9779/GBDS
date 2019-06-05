import React, {useState} from "react"
import {Text, TextInput, TouchableWithoutFeedback, View, TouchableOpacity} from "react-native"
import styles from "./styles"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import {faTimesCircle} from "@fortawesome/free-regular-svg-icons"
import stylesheets from "@src/common/stylesheets"

const RoomInput = ({name, onChange, onClose}) => {
  const roomInputNumber = React.createRef()
  const bedRoomInputNumber = React.createRef()
  const toiletInputNumber = React.createRef()

  const [roomNumber, setRoomNumber] = useState("0")
  const [bedRoomNumber, setBedRoomNumber] = useState("0")
  const [toiletNumber, setToiletNumber] = useState("0")

  const _onSubmitEditing = (component) => {
    component.current.focus()
  }

  const _onBlur = (e) => {
    onChange({room: parseInt(roomNumber), bedRoom: parseInt(bedRoomNumber), bathRoom: parseInt(toiletNumber)})
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        roomInputNumber.current.focus()
      }}>
      <View style={[styles.container, stylesheets.boxShadow]}>
        <View style={styles.titleContainer}>
          <Text style={[styles.name, {flex: 1}]}>{name}</Text>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              onClose()
            }}>
            <FontAwesomeIcon color={"#FE6093"} size={20} icon={faTimesCircle} />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <TextInput
            ref={roomInputNumber}
            style={styles.textInput}
            keyboardType={"numeric"}
            returnKeyType={"next"}
            value={roomNumber}
            onSubmitEditing={() => _onSubmitEditing(bedRoomInputNumber)}
            onFocus={() => {
              setRoomNumber("")
            }}
            onChangeText={(text) => {
              setRoomNumber(text)
            }}
            onBlur={() => {
              !roomNumber && setRoomNumber("0")
              _onBlur()
            }}
          />
          <Text>{" phòng gồm: "}</Text>
          <TextInput
            ref={bedRoomInputNumber}
            style={styles.textInput}
            keyboardType={"numeric"}
            returnKeyType={"next"}
            value={bedRoomNumber}
            onSubmitEditing={() => _onSubmitEditing(toiletInputNumber)}
            onFocus={() => {
              setBedRoomNumber("")
            }}
            onChangeText={(text) => {
              setBedRoomNumber(text)
            }}
            onBlur={() => {
              !bedRoomNumber && setBedRoomNumber("0")
              _onBlur()
            }}
          />
          <Text>{" phòng ngủ "}</Text>
          <TextInput
            ref={toiletInputNumber}
            style={styles.textInput}
            keyboardType={"numeric"}
            value={toiletNumber}
            returnKeyType={"done"}
            onFocus={() => {
              setToiletNumber("")
            }}
            onChangeText={(text) => {
              setToiletNumber(text)
            }}
            onBlur={() => {
              !toiletNumber && setToiletNumber("0")
              _onBlur()
            }}
          />
          <Text>{" toilet"}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default RoomInput

{
  /*  */
}
