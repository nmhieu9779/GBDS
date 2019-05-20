import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import constants from "../../Constant"
import style from "../style"
import Header from "../../Component/HeaderPost"
import { SafeAreaView } from "react-navigation"
import ComboBox from "../../Component/combobox"
import DatePicker from "react-native-datepicker"
import moment from "moment"

class Step7 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedVipType: 0,
      startDate: new Date(),
      endDate: "",
      betweenDay: ""
    }
  }

  componentDidMount = () => {
    var endDate = new Date()
    endDate.setDate(endDate.getDate() + 30)
    this.setState({ endDate: endDate })
  }

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
            <Text style={[styles.textCO, styles.textFB]}>
              {string.vip_2.content_2}
            </Text>
            {string.vip_2.content_3}
            <Text style={[styles.textCO, styles.textFB]}>
              {string.vip_2.content_4}
            </Text>
            {string.vip_2.content_5}
          </Text>
        )
      case 4:
        return (
          <Text style={styles.text}>
            <Text style={styles.infoVipName}>{string.vip_1.name}</Text>
            {string.vip_1.content_1}
            <Text style={[styles.textCR, styles.textFB]}>
              {string.vip_1.content_2}
            </Text>
            {string.vip_1.content_3}
            <Text style={[styles.textCR, styles.textFB]}>
              {string.vip_1.content_4}
            </Text>
            {string.vip_1.content_5}
          </Text>
        )
      case 5:
        return (
          <Text style={styles.text}>
            <Text style={styles.infoVipName}>{string.special.name}</Text>
            {string.special.content_1}
            <Text style={[styles.textCR, styles.textFB]}>
              {string.special.content_2}
            </Text>
            {string.special.content_3}
            <Text style={[styles.textCR, styles.textFB]}>
              {string.special.content_4}
            </Text>
            {string.special.content_5}
          </Text>
        )
      default:
        return
    }
  }

  getTotal = (startDate, endDate, type, string) => {
    let day = this.getDay(startDate, endDate)
    let total =
      (Number.isInteger(string.dayPriceInt[type]) &&
        string.dayPriceInt[type] * day) ||
      string.dayPriceInt[type]
    return this.formatTotal(total)
  }

  getDay = (startDate, endDate) =>
    moment(endDate).diff(moment(startDate), "days")

  formatTotal = total =>
    total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")

  render() {
    const styles = style.step7
    const string = constants.ForSalePostScreen.step7
    return (
      <SafeAreaView style={[styles.container, this.props.style]}>
        <Header text={string.header} />
        <ScrollView>
          <ComboBox
            style={styles.combobox}
            data={string.vipType.data}
            selected={this.state.selectedVipType}
            title={string.vipType.title}
            label={string.vipType.label}
            onChangeSelected={selected => {
              this.setState({ selectedVipType: selected })
            }}
          />
          {this.vipTypeInfo(this.state.selectedVipType, styles, string)}
          <View style={styles.datePickerContainer}>
            <Text style={styles.datePickerLabel}>{string.startDate}</Text>
            <DatePicker
              style={styles.datePicker}
              date={this.state.startDate}
              mode={string.datePicker.mode}
              placeholder={string.startDate}
              format={string.datePicker.format}
              confirmBtnText={string.datePicker.confirmBtnText}
              cancelBtnText={string.datePicker.cancelBtnText}
              customStyles={styles.datePickerCustom}
              onDateChange={(dateStr, date) => {
                this.setState({ startDate: date })
              }}
            />
          </View>
          <View style={styles.datePickerContainer}>
            <Text style={styles.datePickerLabel}>{string.endDate}</Text>
            <DatePicker
              style={styles.datePicker}
              date={this.state.endDate}
              mode={string.datePicker.mode}
              placeholder={string.endDate}
              format={string.datePicker.format}
              confirmBtnText={string.datePicker.confirmBtnText}
              cancelBtnText={string.datePicker.cancelBtnText}
              customStyles={styles.datePickerCustom}
              onDateChange={(dateStr, date) => {
                this.setState({ endDate: date })
              }}
            />
          </View>
          <Text style={styles.text}>
            {string.latestPrice}
            <Text style={[styles.textCB, styles.textFB]}>
              {string.dayPrice[this.state.selectedVipType]}
            </Text>
          </Text>
          <Text style={styles.text}>
            {string.dayNumber}
            <Text style={[styles.textCB, styles.textFB]}>
              {this.getDay(this.state.startDate, this.state.endDate)}
            </Text>
          </Text>
          <Text style={styles.suggest}>{string.suggest}</Text>
        </ScrollView>
        <SafeAreaView style={styles.footer}>
          <Text style={styles.textFooter}>
            {string.textFooter}
            <Text style={styles.total}>
              {this.getTotal(
                this.state.startDate,
                this.state.endDate,
                this.state.selectedVipType,
                string
              )}
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
}

export default Step7
