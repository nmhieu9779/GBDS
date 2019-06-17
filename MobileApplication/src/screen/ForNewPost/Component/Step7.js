import React, {useState, useEffect} from "react"
import {View, Text, ScrollView, TouchableOpacity} from "react-native"
import {stringStep7 as string} from "../string"
import {step7 as styles} from "../styles"
import Header from "@src/component/header-post"
import SafeAreaView from "react-native-safe-area-view"
import ComboBoxDetail from "@src/component/combobox-detail"
import DatePicker from "react-native-datepicker"
import moment from "moment"

const Step7 = (props) => {
  const [vipType, setVipType] = useState({id: null, name: "", type: null, selected: -1})
  const [startDate, setStartDate] = useState(moment(new Date()))

  useEffect(() => {
    pushData()
  }, [vipType, startDate])

  const pushData = () =>
    props.onChangeData({
      step7: {
        vipType,
        startDate
      }
    })

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
    <SafeAreaView style={styles.container}>
      <Header text={string.header} />
      <ScrollView>
        <ComboBoxDetail
          is={true}
          data={string.vipType.data}
          selected={vipType.selected}
          title={string.vipType.title}
          label={string.vipType.label}
          name={vipType.name}
          onChangeSelected={(e) => {
            setVipType({...e})
          }}
          enable={true}
        />
        {_vipDetail({data: string.vipDetail, type: vipType.type})}
        <View style={styles.datePickerContainer}>
          <Text style={styles.datePickerLabel}>{string.startDate}</Text>
          <DatePicker
            style={styles.datePicker}
            date={startDate}
            mode={string.datePicker.mode}
            placeholder={string.startDate}
            format={string.datePicker.format}
            confirmBtnText={string.datePicker.confirmBtnText}
            cancelBtnText={string.datePicker.cancelBtnText}
            customStyles={{
              dateIcon: styles.dateIcon,
              dateInput: styles.dateInput
            }}
            onDateChange={(dateStr, date) => {
              setStartDate(date)
            }}
          />
        </View>
        <Text style={styles.text}>
          {string.latestPrice}
          <Text style={styles.note}>{string.dayPrice[vipType.selected]}</Text>
        </Text>
        <Text style={styles.suggest}>{string.suggest}</Text>
      </ScrollView>
      <SafeAreaView style={styles.footer}>
        <TouchableOpacity onPress={props.onPress.bind()} style={styles.btnPostContainer}>
          <Text style={styles.btnPost}>{string.post}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  )
}

export default Step7
