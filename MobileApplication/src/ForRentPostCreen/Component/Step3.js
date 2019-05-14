import React, { Component } from "react"
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TextInput
} from "react-native"
import constants from "../../Constant"
import { SafeAreaView } from "react-navigation"
import TextInputCustom from "../../Component/TextInputCustom"
import Header from "../../Component/HeaderPost"
import ComboBox from "../../Component/ComboBox"

class Step3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: "",
      landWidth: "",
      floorNumbers: "",
      roomNumber: "",
      toiletNumber: "",
      dataDirection: [
        { label: "Không xác định" },
        { label: "Đông" },
        { label: "Tây" },
        { label: "Nam" },
        { label: "Bắc" },
        { label: "Đông-Bắc" },
        { label: "Tây-Bắc" },
        { label: "Tây-Nam" },
        { label: "Đông-Nam" }
      ],
      homeDirection: 0,
      baconDirection: 0
    }
  }

  render() {
    const { style } = this.props
    return (
      <SafeAreaView style={[styles.container, style]}>
        <Header text={"Thông tin khác"} />
        <ScrollView
          contentContainerStyle={{ alignItems: "center", paddingBottom: 50 }}
        >
          <Text
            style={{
              fontStyle: "italic",
              color: "gray",
              padding: 10
            }}
          >
            {
              "Quý vị nên điền đầy đủ thông tin vào các mục dưới đây để tin đăng có hiệu quả hơn"
            }
          </Text>
          <TextInputCustom
            onChangeText={text => this.setState({ width: text })}
            value={this.state.width}
            style={{
              container: {
                width: constants.width - 10,
                marginBottom: 5
              }
            }}
            label={"Mặt tiền (m)"}
            keyboardType={"numeric"}
          />
          <TextInputCustom
            onChangeText={text => this.setState({ landWidth: text })}
            value={this.state.landWidth}
            style={{
              container: {
                width: constants.width - 10,
                marginBottom: 5
              }
            }}
            label={"Đường vào (m)"}
            keyboardType={"numeric"}
          />
          <ComboBox
            style={{
              container: {
                width: constants.width,
                height: null
              },
              combobox: { flex: 2 },
              label: { fontWeight: "bold", fontSize: 16 }
            }}
            data={this.state.dataDirection}
            selected={this.state.homeDirection}
            title={"-- Hướng nhà --"}
            label={"Hướng nhà"}
            onChangeSelected={selected => {
              this.setState({ homeDirection: selected })
            }}
          />
          <ComboBox
            style={{
              container: {
                width: constants.width,
                height: null
              },
              combobox: { flex: 2 },
              label: { fontWeight: "bold", fontSize: 16 }
            }}
            data={this.state.dataDirection}
            selected={this.state.baconDirection}
            title={"-- Hướng ban công --"}
            label={"Hướng ban công"}
            onChangeSelected={selected => {
              this.setState({ baconDirection: selected })
            }}
          />
          <TextInputCustom
            onChangeText={text => this.setState({ floorNumbers: text })}
            value={this.state.floorNumbers}
            style={{
              container: {
                width: constants.width - 10,
                marginBottom: 5
              }
            }}
            label={"Số tầng"}
            keyboardType={"numeric"}
          />
          <TextInputCustom
            onChangeText={text => this.setState({ roomNumber: text })}
            value={this.state.roomNumber}
            style={{
              container: {
                width: constants.width - 10,
                marginBottom: 5
              }
            }}
            label={"Số phòng ngủ"}
            keyboardType={"numeric"}
          />
          <TextInputCustom
            onChangeText={text => this.setState({ toiletNumber: text })}
            value={this.state.toiletNumber}
            style={{
              container: {
                width: constants.width - 10,
                marginBottom: 5
              }
            }}
            label={"Số toilet"}
            keyboardType={"numeric"}
          />
          <View
            style={{
              padding: 5,
              width: constants.width
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>
              {"Nội thất khác"}
            </Text>
            <TextInput
              style={{
                borderColor: "#ccc",
                borderWidth: 0.5,
                borderRadius: 10,
                padding: 5
              }}
              multiline={true}
              //   value={}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Step3
