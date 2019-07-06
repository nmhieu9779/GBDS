import React, {memo} from "react"
import {View, Text, ScrollView, TouchableOpacity} from "react-native"
import {stringStep7 as string} from "../string"
import {step7 as styles} from "../styles"
import Header from "@src/component/header-post"
import ComboBox from "@src/component/combobox"

const Step7 = (props) => {
  const styleCBB = {
    container: styles.containerCombobox,
    combobox: styles.combobox
  }

  const onChangeSelected = (stateName, data) => {
    props.onChangeData({[stateName]: data})
  }
  const _vipDetail = ({data, type}) =>
    data.map(
      (item) =>
        item.type === type && (
          <Text key={item.type} style={styles.text}>
            <Text style={styles.infoVipName}>{item.name}</Text>
            {item.content}
            <Text style={item.style}>{item.color}</Text>
            {item.location}
          </Text>
        )
    )

  return (
    <View style={styles.container}>
      <Header text={string.header} />
      <ScrollView>
        <ComboBox
          style={styleCBB}
          data={string.vipType.data}
          selected={props.vipType.selected}
          title={string.vipType.title}
          label={string.vipType.label}
          onChangeSelected={onChangeSelected.bind(this, "vipType")}
          enable={true}
          name={props.vipType.name}
        />
        {_vipDetail({data: string.vipDetail, type: props.vipType.type})}
        <Text style={styles.text}>
          {string.latestPrice}
          <Text style={styles.note}>{string.dayPrice[props.vipType.selected]}</Text>
        </Text>
        <Text style={styles.suggest}>{string.suggest}</Text>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={props.onPress.bind()} style={styles.btnPostContainer}>
          <Text style={styles.btnPost}>{props.isNew ? string.post : "Chỉnh sửa"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Step7
