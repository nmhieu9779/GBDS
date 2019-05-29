import React, { useState } from "react"
import { Text, TextInput, TouchableWithoutFeedback, View } from "react-native"
import styles from "./styles"

const RoomInput = ({ width, name, onChange }) => {
  const roomInputNumber = React.createRef()
  const bedRoomInputNumber = React.createRef()
  const toiletInputNumber = React.createRef()

  const [roomNumber, setRoomNumber] = useState("0")
  const [bedRoomNumber, setBedRoomNumber] = useState("0")
  const [toiletNumber, setToiletNumber] = useState("0")

  const _onSubmitEditing = component => {
    component.current.focus()
  }

  const _onBlur = e => {
    onChange({ roomNumber, bedRoomNumber, toiletNumber })
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        roomInputNumber.current.focus()
      }}
    >
      <View
        style={[
          styles.container,
          {
            width: width
          }
        ]}
      >
        <Text style={[styles.name, { flex: 1 }]}>{name}</Text>
        <Text>{" có "}</Text>
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
          onChangeText={text => {
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
          onChangeText={text => {
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
          onChangeText={text => {
            setToiletNumber(text)
          }}
          onBlur={() => {
            !toiletNumber && setToiletNumber("0")
            _onBlur()
          }}
        />
        <Text>{" toilet"}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default RoomInput
