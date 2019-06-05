import React, {useState, useEffect} from "react"
import {View, Text, ScrollView, TouchableOpacity} from "react-native"
import {stringStep7 as string} from "../string"
import {step7 as styles} from "../styles"
import Header from "@src/component/header-post"
import SafeAreaView from "react-native-safe-area-view"
import ComboBoxDetail from "@src/component/combobox-detail"
import DatePicker from "react-native-datepicker"
import moment from "moment"
import TYPE_CODE from "@src/common/typeCode"

const Step7 = () => {
  const [vipTypeSelected, setVipTypeSelected] = useState(-1)
  const [vipTypeName, setVipTypeName] = useState("")
  const [vipTypeType, setVipTypeType] = useState("")

  const [startDate, setStartDate] = useState(moment(new Date()))
  const [endDate, setEndDate] = useState(moment(new Date()).add(30, "days"))
  const [betweenDay, setBetweenDay] = useState("")

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

  const getTotal = ({startDate, endDate, index, string}) => {
    let day = getDay(startDate, endDate)
    let total = index !== -1 && string.dayPriceInt[index] * day
    return formatTotal(total)
  }

  const getDay = (startDate, endDate) => moment(endDate).diff(moment(startDate), "days")

  const formatTotal = (total) => total && total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")

  return (
    <SafeAreaView style={styles.container}>
      <Header text={string.header} />
      <ScrollView>
        <ComboBoxDetail
          is={true}
          data={string.vipType.data}
          selected={vipTypeSelected}
          title={string.vipType.title}
          label={string.vipType.label}
          name={vipTypeName}
          onChangeSelected={({name, type, selected}) => {
            setVipTypeSelected(selected)
            setVipTypeName(name)
            setVipTypeType(type)
          }}
          enable={true}
        />
        {_vipDetail({data: string.vipDetail, type: vipTypeType})}
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
        <View style={styles.datePickerContainer}>
          <Text style={styles.datePickerLabel}>{string.endDate}</Text>
          <DatePicker
            style={styles.datePicker}
            date={endDate}
            mode={string.datePicker.mode}
            placeholder={string.endDate}
            format={string.datePicker.format}
            confirmBtnText={string.datePicker.confirmBtnText}
            cancelBtnText={string.datePicker.cancelBtnText}
            customStyles={{
              dateIcon: styles.dateIcon,
              dateInput: styles.dateInput
            }}
            onDateChange={(dateStr, date) => {
              setEndDate(date)
            }}
          />
        </View>
        <Text style={styles.text}>
          {string.latestPrice}
          <Text style={styles.note}>{string.dayPrice[vipTypeSelected]}</Text>
        </Text>
        <Text style={styles.text}>
          {string.dayNumber}
          <Text style={styles.note}>{getDay(startDate, endDate)}</Text>
        </Text>
        <Text style={styles.suggest}>{string.suggest}</Text>
      </ScrollView>
      <SafeAreaView style={styles.footer}>
        <Text style={styles.textFooter}>
          {string.textFooter}
          <Text style={styles.total}>
            {getTotal({startDate, endDate, index: vipTypeSelected, string})}
            {string.vnd}
          </Text>
        </Text>
        <TouchableOpacity style={styles.btnPostContainer}>
          <Text style={styles.btnPost}>{string.post}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  )
}

export default Step7
