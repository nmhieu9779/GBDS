import React, {useState, useEffect} from "react"
import {Text, TouchableOpacity, FlatList} from "react-native"
import styles from "./styles"
import RoomInput from "@src/component/room-input"

const FloorsInfo = ({roomNumber, onChangeRoom, onAddNewRoom}) => {
  return (
    <>
      {roomNumber.map((item, index) => {
        return (
          <RoomInput
            key={index}
            name={item.description}
            onChange={(data) => {
              let tempRoomNumber = roomNumber
              tempRoomNumber[index] = {...roomNumber[index], ...data}
              onChangeRoom(tempRoomNumber)
            }}
            room={{room: item.room, bedRoom: item.bedRoom, bathRoom: item.bathRoom}}
            onClose={() => {
              let data = roomNumber
              data.splice(index, 1)
              onChangeRoom(
                roomNumber.map((item, index) => ({
                  ...item,
                  description: index === 0 ? `Tầng trệt` : `Tầng ${index}`,
                  index: index
                }))
              )
            }}
          />
        )
      })}
      <TouchableOpacity style={styles.btnAdd} onPress={onAddNewRoom.bind()}>
        <Text style={{color: "#1DA1F2"}}>{"Thêm tầng..."}</Text>
      </TouchableOpacity>
    </>
  )
}

export default FloorsInfo
