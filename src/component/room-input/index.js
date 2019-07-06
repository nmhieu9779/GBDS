import React, {useRef} from "react"
import {Text, TextInput, TouchableWithoutFeedback, View, TouchableOpacity} from "react-native"
import styles from "./styles"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import {faTimesCircle} from "@fortawesome/free-regular-svg-icons"
import Card from "@src/component/card"

const RoomInput = ({name, onChange, onClose, room}) => {
  const roomInputNumber = useRef(null)
  const bedRoomInputNumber = useRef(null)
  const toiletInputNumber = useRef(null)

  const _onSubmitEditing = (component) => {
    component.current.focus()
  }

  onChangeText = (stateName, text) => onChange({...room, [stateName]: text})

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        roomInputNumber.current.focus()
      }}>
      <Card style={styles.container}>
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
            value={room.room}
            onSubmitEditing={() => _onSubmitEditing(bedRoomInputNumber)}
            onChangeText={onChangeText.bind(this, "room")}
            onBlur={() => {
              !room.room && onChangeText("room", "0")
            }}
            placeholder={"0"}
          />
          <Text>{" phòng gồm: "}</Text>
          <TextInput
            ref={bedRoomInputNumber}
            style={styles.textInput}
            keyboardType={"numeric"}
            returnKeyType={"next"}
            value={room.bedRoom}
            onSubmitEditing={() => _onSubmitEditing(toiletInputNumber)}
            onChangeText={onChangeText.bind(this, "bedRoom")}
            onBlur={() => {
              !room.bedRoom && onChangeText("bedRoom", "0")
            }}
            placeholder={"0"}
          />
          <Text>{" phòng ngủ "}</Text>
          <TextInput
            ref={toiletInputNumber}
            style={styles.textInput}
            keyboardType={"numeric"}
            value={room.bathRoom}
            returnKeyType={"done"}
            onChangeText={onChangeText.bind(this, "bathRoom")}
            onBlur={() => {
              !room.bathRoom && onChangeText("bathRoom", "0")
            }}
            placeholder={"0"}
          />
          <Text>{" toilet"}</Text>
        </View>
      </Card>
    </TouchableWithoutFeedback>
  )
}

export default RoomInput
