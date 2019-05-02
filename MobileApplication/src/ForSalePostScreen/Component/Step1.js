import React, { Component } from "react"
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from "react-native"
import constants from "../../Constant"
import propTypes from "prop-types"
import TextInputCustom from "../../Component/TextInputCustom"
import ComboBox from "../../Component/ComboBox"
import Header from "./Header"
import { SafeAreaView } from "react-navigation"

class Step1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productTitle: "",
      area: "",
      price: "",
      dataPrice: [],
      selectedPrice: -1,
      listSelected: [
        { selected: -1 },
        { selected: -1 },
        { selected: -1 },
        { selected: -1 },
        { selected: -1 },
        { selected: -1 }
      ],
      listData: [
        [{ label: "Nhà đất bán" }, { label: "Nhà đất cho thuê" }],
        [],
        [],
        [],
        [],
        []
      ],
      listComboBox: [
        {
          key: "productType",
          title: "-- Hình thức --",
          label: "Hình thức"
        },
        {
          key: "productCate",
          data: {
            sale: [
              { label: "Bán căn hộ chung cư" },
              { label: "Bán nhà riêng" },
              { label: "Bán nhà biệt thự, liền kề" },
              { label: "Bán nhà mặt phố" },
              { label: "Bán đất nền dự án" },
              { label: "Bán đất" },
              { label: "Bán trang trại, khu nghĩ dưỡng" },
              { label: "Bán kho, nhà xưởng" },
              { label: "Bán loại bất động sản khác" }
            ],
            rent: [
              { label: "Cho thuê căn hộ chng cư" },
              { label: "Cho thuê nhà riêng" },
              { label: "Cho thuê nhà mặt phố" },
              { label: "Cho thuê nhà trọ, phòng trọ" },
              { label: "Cho thuê văn phòng" },
              { label: "Cho thuê cửa hàng, ki ốt" },
              { label: "Cho thuê kho, nhà xưởng, đất" },
              { label: "Cho thuê loại bất động sản khác" }
            ]
          },
          title: "-- Phân mục --",
          label: "Loại"
        },
        {
          key: "city",
          title: "-- Tỉnh/thành phố --",
          label: "Tỉnh/thành phố"
        },
        {
          key: "district",
          title: "-- Quận/Huyện --",
          label: "Quận/Huyện"
        },
        {
          key: "ward",
          title: "-- Phường/Xã --",
          label: "Phường/Xã"
        },
        {
          key: "street",
          title: "-- Đường/Phố --",
          label: "Đường/Phố"
        }
      ]
    }
  }

  componentDidMount = () => {
    fetch("http://35.187.253.10:21006/api-gateway/grre-admnu/api/v1/provinces")
      .then(response => response.json())
      .then(responseJson => {
        let listCity = responseJson.content.map(item => ({ label: item.name }))
        let listData = this.createNewData(listCity, 2)
        this.setState({ lisData: listData })
      })
      .catch(error => {
        console.error(error)
      })
  }

  createNewData = (data, index) => {
    let listData = this.state.listData
    listData[index] = data
    return listData
  }

  render() {
    let ward =
      this.state.listSelected[4].selected != -1
        ? this.state.lisData[4][this.state.listSelected[4].selected].label +
          ", "
        : ""
    let district =
      this.state.listSelected[3].selected != -1
        ? this.state.lisData[3][this.state.listSelected[3].selected].label +
          ", "
        : ""
    let city =
      this.state.listSelected[2].selected != -1
        ? this.state.lisData[2][this.state.listSelected[2].selected].label
        : ""
    return (
      <SafeAreaView style={[styles.container, this.props.style]}>
        <Header text={"Thông tin cơ bản"} />
        <ScrollView contentContainerStyle={{ alignItems: "center" }}>
          <TextInputCustom
            onChangeText={text => this.setState({ productTitle: text })}
            value={this.state.productTitle}
            style={{
              labelStyle: {
                color: "red"
              },
              container: {
                width: constants.width - 10,
                marginBottom: 5
              }
            }}
            label={"Tiêu đề"}
          />
          {this.state.listComboBox.map(({ key, title, label }, index) => {
            return (
              <ComboBox
                style={{
                  container: {
                    width: constants.width,
                    height: null
                  },
                  combobox: { flex: 2 }
                }}
                key={key}
                data={this.state.listData[index]}
                selected={this.state.listSelected[index].selected}
                title={title}
                label={label}
                onChangeSelected={selected => {
                  this.onChangeSelected(selected, index)
                }}
              />
            )
          })}
          <TextInputCustom
            onChangeText={text => this.setState({ area: text })}
            value={this.state.area}
            style={{
              container: {
                width: constants.width - 10,
                marginBottom: 5
              }
            }}
            label={"Diện tích"}
            keyboardType={"numeric"}
          >
            <Text style={{ position: "absolute", right: 5, bottom: 3 }}>
              {"m²"}
            </Text>
          </TextInputCustom>
          <TextInputCustom
            onChangeText={text => this.setState({ price: text })}
            value={this.state.price}
            style={{
              container: {
                width: constants.width - 10,
                marginBottom: 5
              }
            }}
            label={"Giá"}
            keyboardType={"numeric"}
          >
            <ComboBox
              style={{
                container: {
                  width: constants.width / 2,
                  position: "absolute",
                  right: 5,
                  bottom: 3
                }
              }}
              data={this.state.dataPrice}
              selected={this.state.selectedPrice}
              title={"-- Đơn vị --"}
              onChangeSelected={selected => {
                this.setState({ selectedPrice: selected })
              }}
            />
          </TextInputCustom>
          <View
            style={{
              flexDirection: "row",
              padding: 5,
              alignItems: "center"
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {"Tổng giá tiền:"}
            </Text>
            <Text style={{ color: "red", marginLeft: 10, flex: 1 }}>
              100000
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              padding: 5,
              alignItems: "center"
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {"Địa chỉ"}
            </Text>
            <TextInput
              style={{
                flex: 1,
                borderColor: "#ccc",
                borderWidth: 0.5,
                borderRadius: 5,
                marginLeft: 10,
                padding: 5
              }}
              multiline={true}
              value={ward + district + city}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
  onChangeSelected = (selected, index) => {
    let listSelected = this.state.listSelected
    switch (index) {
      case 0:
        listSelected[index].selected = selected
        this.getDataProductCate(selected)
        this.getDataPrice(selected)
        break
      case 1:
        listSelected[index].selected = selected
        break
      case 2:
        listSelected[index].selected = selected
        this.getDataDistrict(selected + 1)
        break
      case 3:
        listSelected[index].selected = selected
        this.getDataWard(
          this.state.listSelected[2].selected + 1,
          this.state.listData[3][selected].id
        )
        break
      case 4:
        listSelected[index].selected = selected
        this.getDataStreet(
          this.state.listSelected[2].selected + 1,
          this.state.listData[3][selected].id
        )
        break
      case 5:
        listSelected[index].selected = selected
        break
      default:
        break
    }
    this.setState({
      listSelected: listSelected
    })
  }
  getDataProductCate = selected => {
    const sale = [
      { label: "Bán căn hộ chung cư" },
      { label: "Bán nhà riêng" },
      { label: "Bán nhà biệt thự, liền kề" },
      { label: "Bán nhà mặt phố" },
      { label: "Bán đất nền dự án" },
      { label: "Bán đất" },
      { label: "Bán trang trại, khu nghĩ dưỡng" },
      { label: "Bán kho, nhà xưởng" },
      { label: "Bán loại bất động sản khác" }
    ]
    const rent = [
      { label: "Cho thuê căn hộ chng cư" },
      { label: "Cho thuê nhà riêng" },
      { label: "Cho thuê nhà mặt phố" },
      { label: "Cho thuê nhà trọ, phòng trọ" },
      { label: "Cho thuê văn phòng" },
      { label: "Cho thuê cửa hàng, ki ốt" },
      { label: "Cho thuê kho, nhà xưởng, đất" },
      { label: "Cho thuê loại bất động sản khác" }
    ]
    let listData = this.createNewData(selected === 0 ? sale : rent, 1)
    this.setState({ lisData: listData })
  }
  getDataDistrict = id => {
    fetch(
      "http://35.187.253.10:21006/api-gateway/grre-admnu/api/v1/districts/" + id
    )
      .then(response => response.json())
      .then(responseJson => {
        let listDistrict = responseJson.content.map(item => ({
          label: item.name,
          id: item.id
        }))
        let listData = this.createNewData(listDistrict, 3)
        this.setState({ lisData: listData })
      })
      .catch(error => {
        console.error(error)
      })
  }
  getDataWard = (city, district) => {
    fetch(
      "http://35.187.253.10:21006/api-gateway/grre-admnu/api/v1/wards/" +
        city +
        "/" +
        district
    )
      .then(response => response.json())
      .then(responseJson => {
        let listWard = responseJson.content.map(item => ({
          label: item.name,
          id: item.id
        }))
        let listData = this.createNewData(listWard, 4)
        this.setState({ lisData: listData })
      })
      .catch(error => {
        console.error(error)
      })
  }
  getDataStreet = (city, district) => {
    fetch(
      "http://35.187.253.10:21006/api-gateway/grre-admnu/api/v1/streets/" +
        city +
        "/" +
        district
    )
      .then(response => response.json())
      .then(responseJson => {
        let listStreet = responseJson.content.map(item => ({
          label: item.name,
          id: item.ID
        }))
        let listData = this.createNewData(listStreet, 5)
        this.setState({ lisData: listData })
      })
      .catch(error => {
        console.error(error)
      })
  }
  getDataPrice = selected => {
    const sale = [
      { label: "Thoả thuận" },
      { label: "Triệu" },
      { label: "Tỷ" },
      { label: "Trăm nghìn/m2" },
      { label: "Triệu/m2" }
    ]
    const rent = [
      { label: "Thoả thuận" },
      { label: "Trăm nghìn/Tháng" },
      { label: "Triệu/Tháng" },
      { label: "Trăm nghìn/m2/Tháng" },
      { label: "Triệu/m2/Tháng" },
      { label: "Nghìn/m2/Tháng" }
    ]
    this.setState({ dataPrice: selected === 0 ? sale : rent, selectedPrice: 0 })
  }
}

Step1.propTypes = {
  style: propTypes.object.isRequired
}

Step1.defaultProps = {
  style: { flex: 1 }
}

const styles = StyleSheet.create({
  container: { flex: 1 }
})

export default Step1
