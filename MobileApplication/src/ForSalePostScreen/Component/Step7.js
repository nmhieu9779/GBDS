import React, {useState, useEffect} from "react"
import {View, Text, ScrollView, TouchableOpacity} from "react-native"
import {stringStep7 as string} from "../string"
import {step7 as styles} from "../styles"
import Header from "../../Component/header-post"
import {SafeAreaView} from "react-navigation"
import ComboBox from "../../Component/combobox"
import DatePicker from "react-native-datepicker"
import moment from "moment"

const Step7 = () => {
  const [vipTypeSelected, setVipTypeSelected] = useState(0)
  const [startDate, setStartDate] = useState(moment(new Date()))
  const [endDate, setEndDate] = useState(moment(new Date()).add(30, "days"))
  const [betweenDay, setBetweenDay] = useState("")

  vipTypeInfo = (selectedVipType, styles, string) => {
    switch (selectedVipType) {
      case 0:
        return (
          <Text style={styles.text}>
            <Text style={styles.infoVipName}>{string.normal.name}</Text>
            {string.normal.content_1}
            <Text style={styles.textCB}>{string.normal.content_2}</Text>
            {string.normal.content_3}
            <Text style={styles.textCB}>{string.normal.content_4}</Text>
          </Text>
        )
      case 1:
        return (
          <Text style={styles.text}>
            <Text style={styles.infoVipName}>{string.goodwill.name}</Text>
            {string.goodwill.content_1}
          </Text>
        )
      case 2:
        return (
          <Text style={styles.text}>
            <Text style={styles.infoVipName}>{string.vip_3.name}</Text>
            {string.vip_3.content_1}
            <Text style={styles.textCO}>{string.vip_3.content_2}</Text>
            {string.vip_3.content_3}
            <Text style={styles.textCO}>{string.vip_3.content_4}</Text>
            {string.vip_3.content_5}
          </Text>
        )
      case 3:
        return (
          <Text style={styles.text}>
            <Text style={styles.infoVipName}>{string.vip_2.name}</Text>
            {string.vip_2.content_1}
            <Text style={[styles.textCO, styles.textFB]}>{string.vip_2.content_2}</Text>
            {string.vip_2.content_3}
            <Text style={[styles.textCO, styles.textFB]}>{string.vip_2.content_4}</Text>
            {string.vip_2.content_5}
          </Text>
        )
      case 4:
        return (
          <Text style={styles.text}>
            <Text style={styles.infoVipName}>{string.vip_1.name}</Text>
            {string.vip_1.content_1}
            <Text style={[styles.textCR, styles.textFB]}>{string.vip_1.content_2}</Text>
            {string.vip_1.content_3}
            <Text style={[styles.textCR, styles.textFB]}>{string.vip_1.content_4}</Text>
            {string.vip_1.content_5}
          </Text>
        )
      case 5:
        return (
          <Text style={styles.text}>
            <Text style={styles.infoVipName}>{string.special.name}</Text>
            {string.special.content_1}
            <Text style={[styles.textCR, styles.textFB]}>{string.special.content_2}</Text>
            {string.special.content_3}
            <Text style={[styles.textCR, styles.textFB]}>{string.special.content_4}</Text>
            {string.special.content_5}
          </Text>
        )
      default:
        return
    }
  }

  const getTotal = (startDate, endDate, type, string) => {
    let day = getDay(startDate, endDate)
    let total =
      (Number.isInteger(string.dayPriceInt[type]) && string.dayPriceInt[type] * day) ||
      string.dayPriceInt[type]
    return formatTotal(total)
  }

  const getDay = (startDate, endDate) => moment(endDate).diff(moment(startDate), "days")

  const formatTotal = (total) => total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")

  return (
    <SafeAreaView style={styles.container}>
      <Header text={string.header} />
      <ScrollView>
        <ComboBox
          style={{
            container: styles.containerCombobox,
            combobox: styles.comboboxCombobox
          }}
          data={string.vipType.data}
          selected={vipTypeSelected}
          title={string.vipType.title}
          label={string.vipType.label}
          onChangeSelected={(selected) => {
            setVipTypeSelected(selected)
          }}
          enable={true}
        />
        {vipTypeInfo(vipTypeSelected, styles, string)}
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
            customStyles={styles.datePickerCustom}
            onDateChange={(dateStr, date) => {
              setEndDate(date)
            }}
          />
        </View>
        <Text style={styles.text}>
          {string.latestPrice}
          <Text style={[styles.textCB, styles.textFB]}>{string.dayPrice[vipTypeSelected]}</Text>
        </Text>
        <Text style={styles.text}>
          {string.dayNumber}
          <Text style={[styles.textCB, styles.textFB]}>{getDay(startDate, endDate)}</Text>
        </Text>
        <Text style={styles.suggest}>{string.suggest}</Text>
      </ScrollView>
      <SafeAreaView style={styles.footer}>
        <Text style={styles.textFooter}>
          {string.textFooter}
          <Text style={styles.total}>
            {getTotal(startDate, endDate, vipTypeSelected, string)}
            {string.vnd}
          </Text>
        </Text>
        <TouchableOpacity style={styles.btnPost}>
          <Text style={[styles.textFB, styles.textCW]}>{string.post}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  )
}

export default Step7
