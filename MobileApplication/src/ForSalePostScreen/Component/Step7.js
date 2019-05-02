import React, { Component } from "react"
import {
  Platform,
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native"
import constants from "../../Constant"
import Header from "./Header"
import { SafeAreaView } from "react-navigation"
import ComboBox from "../../Component/ComboBox"
import DatePicker from "react-native-datepicker"
import moment from "moment"

class Step7 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataVipType: [
        { label: "Tin thường" },
        { label: "Tin ưu đãi" },
        { label: "Tin Vip 3" },
        { label: "Tin Vip 2" },
        { label: "Tin Vip 1" },
        { label: "Vip đặc biệt" }
      ],
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

  vipTypeInfo = selectedVipType => {
    switch (selectedVipType) {
      case 0:
        return (
          <Text style={{ padding: 5 }}>
            <Text style={{ fontWeight: "bold" }}>{"Tin thường"}</Text>
            {": Là loại tin đăng bằng chữ "}
            <Text style={{ color: "blue" }}>{"màu xanh"}</Text>
            {", khung "}
            <Text style={{ color: "blue" }}>{"màu xanh "}</Text>
          </Text>
        )
      case 1:
        return (
          <Text style={{ padding: 5 }}>
            <Text style={{ fontWeight: "bold" }}>{"Vip ưu đãi"}</Text>
            {
              ": Là loại tin được hiển thị trong vòng 3 tháng, mỗi tuần sẽ được up tin tự động 1 lần. Tuần đầu tiên sẽ được hiển thị dưới hình thức VIP 2, các tuần tiếp theo hiển thị hình thức tin thường"
            }
          </Text>
        )
      case 2:
        return (
          <Text style={{ padding: 5 }}>
            <Text style={{ fontWeight: "bold" }}>{"Tin Vip 3"}</Text>
            {": Là loại tin đăng bằng chữ "}
            <Text style={{ color: "orange" }}>{"thường màu cam"}</Text>
            {", khung "}
            <Text style={{ color: "orange" }}>{"màu cam "}</Text>
            {
              "và luôn nằm dưới tin Vip 2 nhưng luôn luôn hiển thị trên tin thường."
            }
          </Text>
        )
      case 3:
        return (
          <Text style={{ padding: 5 }}>
            <Text style={{ fontWeight: "bold" }}>{"Tin Vip 2"}</Text>
            {": Là loại tin đăng bằng chữ "}
            <Text style={{ color: "orange", fontWeight: "bold" }}>
              {"IN HOA MÀU CAM"}
            </Text>
            {", khung "}
            <Text style={{ color: "orange", fontWeight: "bold" }}>
              {"màu cam "}
            </Text>
            {"nằm bên dưới tin VIP 1 và ở trên các tin vip 3."}
          </Text>
        )
      case 4:
        return (
          <Text style={{ padding: 5 }}>
            <Text style={{ fontWeight: "bold" }}>{"Tin Vip 1"}</Text>
            {": Là loại tin đăng bằng chữ "}
            <Text style={{ color: "red", fontWeight: "bold" }}>
              {"IN HOA MÀU ĐỎ"}
            </Text>
            {", khung "}
            <Text style={{ color: "red", fontWeight: "bold" }}>{"màu đỏ"}</Text>
            {"nằm bên dưới tin VIP ĐẶC BIỆT và ở trên các tin vip 2."}
          </Text>
        )
      case 5:
        return (
          <Text style={{ padding: 5 }}>
            <Text style={{ fontWeight: "bold" }}>{"Vip đặc biệt"}</Text>
            {": Là loại tin đăng bằng chữ "}
            <Text style={{ color: "red", fontWeight: "bold" }}>
              {"IN HOA MÀU ĐỎ"}
            </Text>
            {", khung "}
            <Text style={{ color: "red", fontWeight: "bold" }}>
              {"màu đỏ "}
            </Text>
            {
              "gắn biểu tượng ngôi sao vàng nổi bật ở tiêu đề tin đăng, hiển thị ở top đầu trang tin và được hưởng nhiều ưu tiên nhất."
            }
          </Text>
        )
      default:
        return
    }
  }

  getDayPrice = selectedVipType => {
    dayPrice = ""
    switch (selectedVipType) {
      case 0:
        dayPrice = "1 nghìn 727 đồng/Ngày"
        break
      case 1:
        dayPrice = "454 nghìn 545 đồng"
        break
      case 2:
        dayPrice = "27 nghìn 272 đồng/Ngày"
        break
      case 3:
        dayPrice = "50 nghìn/Ngày"
        break
      case 4:
        dayPrice = "68 nghìn 181 đồng/Ngày"
        break
      case 5:
        dayPrice = "168 nghìn 181 đồng/Ngày"
        break
      default:
        break
    }
    return dayPrice
  }

  getTotal = (startDate, endDate, type) => {
    let total = 0
    let day = this.getDay(startDate, endDate)
    switch (type) {
      case 0:
        total = 1727 * day
        break
      case 1:
        total = "454 nghìn 545 đồng"
        break
      case 2:
        total = 27272 * day
        break
      case 3:
        total = 50000 * day
        break
      case 4:
        total = 68181 * day
        break
      case 5:
        total = 168181 * day
        break
      default:
        break
    }
    return this.formatTotal(total)
  }

  getDay = (startDate, endDate) =>
    moment(endDate).diff(moment(startDate), "days")

  formatTotal = total =>
    total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")

  render() {
    const { style } = this.props
    return (
      <SafeAreaView style={[styles.container, style]}>
        <Header text={"Lịch đăng tin"} />
        <ScrollView>
          <ComboBox
            style={{
              container: {
                width: constants.width
              },
              combobox: { flex: 3 }
            }}
            data={this.state.dataVipType}
            selected={this.state.selectedVipType}
            title={"-- Loại tin rao --"}
            label={"Loại tin rao"}
            onChangeSelected={selected => {
              this.setState({ selectedVipType: selected })
            }}
          />
          {this.vipTypeInfo(this.state.selectedVipType)}
          <View
            style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
          >
            <Text style={{ flex: 1 }}>{"Ngày bắt đầu"}</Text>
            <DatePicker
              style={{ flex: 3 }}
              date={this.state.startDate}
              mode="date"
              placeholder="Ngày bắt đầu"
              format="DD-MM-YYYY"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  right: 0,
                  top: 4,
                  marginRight: 0
                },
                dateInput: {
                  marginRight: 36,
                  borderRadius: 5
                }
              }}
              onDateChange={(dateStr, date) => {
                this.setState({ startDate: date })
              }}
            />
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
          >
            <Text style={{ flex: 1 }}>{"Ngày kêt thúc"}</Text>
            <DatePicker
              style={{ flex: 3 }}
              date={this.state.endDate}
              mode="date"
              placeholder="Ngày kết thúc"
              format="DD-MM-YYYY"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  right: 0,
                  top: 4,
                  marginRight: 0
                },
                dateInput: {
                  marginRight: 36,
                  borderRadius: 5
                }
              }}
              onDateChange={(dateStr, date) => {
                this.setState({ endDate: date })
              }}
            />
          </View>
          <Text style={{ padding: 5 }}>
            {"Đơn gía cuối cùng: "}
            <Text style={{ fontWeight: "bold", color: "blue" }}>
              {this.getDayPrice(this.state.selectedVipType)}
            </Text>
          </Text>
          <Text style={{ padding: 5 }}>
            {"Số ngày: "}
            <Text style={{ fontWeight: "bold", color: "blue" }}>
              {this.getDay(this.state.startDate, this.state.endDate)}
            </Text>
          </Text>
          <Text
            style={{
              fontStyle: "italic",
              color: "gray",
              padding: 10
            }}
          >
            {
              "Quý khách nên chọn đăng tin Vip để có hiệu quả cao hơn, ví dụ: tin Vip1 có lượt xem trung bình cao hơn 20 lần so với tin thường"
            }
          </Text>
        </ScrollView>
        <SafeAreaView style={{ marginBottom: 100, alignItems: "center" }}>
          <Text
            style={{
              padding: 5,
              marginBottom: 5,
              width: constants.width
            }}
          >
            {"Phí dịch vụ trừ vào tài khoản: "}
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "red" }}>
              {this.getTotal(
                this.state.startDate,
                this.state.endDate,
                this.state.selectedVipType
              )}
              {" VND"}
            </Text>
          </Text>
          <TouchableOpacity
            style={{
              width: 300,
              height: 40,
              backgroundColor: "red",
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ color: "white" }}>{"Đăng bài"}</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Step7
