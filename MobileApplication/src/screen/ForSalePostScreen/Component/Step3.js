import React, {useState} from "react"
import {Text, ScrollView, View, TextInput, TouchableOpacity, FlatList} from "react-native"
import {step3 as styles} from "../styles"
import SafeAreaView from "react-native-safe-area-view"
import TextInputCustom from "@src/component/text-input-custom"
import Header from "@src/component/header-post"
import DirectionInput from "@src/component/direction-input"
import {width, moderateScale} from "@src/utilities/scale"
import {stringStep3 as string} from "../string"
import RoomInput from "@src/component/room-input"

const Step3 = () => {
  const defaultData = {
    roomNumber: "0",
    bedRoomNumber: "0",
    toiletNumber: "0"
  }
  const [widthState, setWidthState] = useState("")
  const [landWidth, setLanWidth] = useState("")
  const [other, setOther] = useState("")
  const [roomNumber, setRoomNumber] = useState([
    {
      id: 0,
      name: "Tầng trệt",
      data: defaultData
    }
  ])
  const [date, setDate] = useState(new Date())
  const _keyExtractor = (item, index) => index.toString()
  const _renderItem = ({item, index}) => (
    <RoomInput
      name={item.id === 0 ? "Tầng trệt" : "Tầng " + item.id}
      onChange={(data) => {
        roomNumber[index].data = data
        setRoomNumber(roomNumber)
      }}
      onClose={() => {
        let data = roomNumber
        data.splice(index, 1)
        setRoomNumber(roomNumber.map((item, index) => ({...item, id: index})))
        setDate(new Date())
      }}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      <Header text={string.header} />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Text style={styles.suggest}>{string.suggest}</Text>
        <TextInputCustom
          onChangeText={(text) => setWidthState(text)}
          value={widthState}
          width={width - moderateScale(10)}
          label={string.widthLabel}
          keyboardType={"numeric"}
        />
        <TextInputCustom
          onChangeText={(text) => setLanWidth(text)}
          value={landWidth}
          width={width - moderateScale(10)}
          label={string.landWidthLabel}
          keyboardType={"numeric"}
        />
        <DirectionInput />
        <FlatList
          data={roomNumber}
          keyExtractor={_keyExtractor.bind(this)}
          extraData={date}
          renderItem={_renderItem.bind(this)}
        />
        <View style={{}}>
          <TouchableOpacity
            style={styles.btnAdd}
            onPress={() => {
              let data = {
                id: roomNumber.length,
                data: defaultData
              }
              setRoomNumber([...roomNumber, data])
            }}>
            <Text style={{color: "#1DA1F2"}}>{"Thêm tầng..."}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.furnitureContainer}>
          <Text style={styles.furnitureTitle}>{string.furnitureTitle}</Text>
          <TextInput
            style={styles.furnitureInput}
            multiline={true}
            value={other}
            onChangeText={(text) => setOther(text)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Step3
