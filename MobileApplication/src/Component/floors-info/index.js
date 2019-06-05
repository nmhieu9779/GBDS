import React, {useState, useEffect} from "react"
import {Text, TouchableOpacity, FlatList} from "react-native"
import styles from "./styles"
import RoomInput from "@src/component/room-input"

const FloorsInfo = ({onChange}) => {
  const defaultData = {
    room: "0",
    bedRoom: "0",
    bathRoom: "0"
  }
  const [roomNumber, setRoomNumber] = useState([
    {
      index: 0,
      description: "Tầng trệt",
      data: defaultData
    }
  ])
  const [date, setDate] = useState(new Date())
  const _keyExtractor = (item, index) => index.toString()
  const _renderItem = ({item, index}) => (
    <RoomInput
      name={item.description}
      onChange={(data) => {
        roomNumber[index].data = data
        setRoomNumber(roomNumber)
        setDate(new Date())
      }}
      onClose={() => {
        let data = roomNumber
        data.splice(index, 1)
        setRoomNumber(
          roomNumber.map((item, index) => ({
            ...item,
            description: index === 0 ? `Tầng trệt` : `Tầng ${index}`,
            index: index
          }))
        )
        setDate(new Date())
      }}
    />
  )

  useEffect(() => {
    onChange({floors: {...roomNumber}})
  }, [date])

  return (
    <>
      <FlatList
        data={roomNumber}
        keyExtractor={_keyExtractor.bind(this)}
        extraData={date}
        renderItem={_renderItem.bind(this)}
      />
      <TouchableOpacity
        style={styles.btnAdd}
        onPress={() => {
          let data = {
            description: roomNumber.length < 0 ? `Tầng trệt` : `Tầng ${roomNumber.length}`,
            index: roomNumber.length,
            data: defaultData
          }
          setRoomNumber([...roomNumber, data])
          setDate(new Date())
        }}>
        <Text style={{color: "#1DA1F2"}}>{"Thêm tầng..."}</Text>
      </TouchableOpacity>
    </>
  )
}

export default FloorsInfo
