import React, {memo} from "react"
import {Text, ScrollView, View, TextInput} from "react-native"
import {step3 as styles} from "../styles"
import TextInputCustom from "@src/component/text-input-custom"
import Header from "@src/component/header-post"
import DirectionInput from "@src/component/direction-input"
import {scale} from "@src/utilities"
import {stringStep3 as string} from "../string"
import FloorsInfo from "@src/component/floors-info"

const Step3 = (props) => {
  const onChangeText = (stateName, data) => {
    props.onChangeData({[stateName]: {value: data}})
  }

  const onChangeSelected = (stateName, data) => {
    props.onChangeData({[stateName]: data})
  }

  const onChangeRoom = (stateName, data) => {
    props.onChangeRoom({[stateName]: data})
  }

  return (
    <View style={styles.container}>
      <Header text={string.header} />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Text style={styles.suggest}>{string.suggest}</Text>
        <TextInputCustom
          onChangeText={onChangeText.bind(this, "frontSide")}
          value={props.frontSide}
          width={scale.WIDTH - scale.moderateScale(10)}
          label={string.widthLabel}
          keyboardType={"numeric"}
        />
        <TextInputCustom
          onChangeText={onChangeText.bind(this, "wayIn")}
          value={props.wayIn}
          width={scale.WIDTH - scale.moderateScale(10)}
          label={string.landWidthLabel}
          keyboardType={"numeric"}
        />
        <DirectionInput
          isDirection={true}
          isBaconDirection={true}
          onChangeSelected={onChangeSelected.bind(this, "direction")}
          direction={props.direction.direction}
          balconyDirection={props.direction.balconyDirection}
        />
        <FloorsInfo
          roomNumber={props.roomNumber}
          onChangeRoom={onChangeRoom.bind(this, "floors")}
          onAddNewRoom={props.onAddNewRoom.bind()}
        />
        <View style={styles.furnitureContainer}>
          <Text style={styles.furnitureTitle}>{string.furnitureTitle}</Text>
          <TextInput
            style={styles.furnitureInput}
            multiline={true}
            value={props.furniture}
            onChangeText={onChangeText.bind(this, "furniture")}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default Step3
