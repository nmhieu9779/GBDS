import React, { Component } from "react"
import { Platform, StyleSheet, Text, ScrollView, TextInput } from "react-native"
import constants from "../../Constant"
import Header from "./Header"
import { SafeAreaView } from "react-navigation"

class Step2 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { style } = this.props
    return (
      <SafeAreaView style={[styles.container, style]}>
        <Header text={"Thông tin mô tả"} />
        <ScrollView>
          <Text
            style={{
              fontStyle: "italic",
              color: "gray",
              textAlign: "right",
              paddingRight: 10
            }}
          >
            <Text style={{ color: "red" }}>{"(*)"}</Text>
            {"Tối đa chỉ 3000 kí tự"}
          </Text>
          <TextInput
            style={{
              height: constants.width / 2,
              margin: 10,
              padding: 10,
              borderWidth: 0.5,
              borderColor: "#ccc",
              borderRadius: 10
            }}
            multiline={true}
          />
          <Text style={{ padding: 5 }}>
            {
              " Giới thiệu chung về bất động sản của bạn. Ví dụ: Khu nhà có vị trí thuận lợi: Gần công viên, gần trường học ... Tổng diện tích 52m2, đường đi ô tô vào tận cửa... "
            }
            <Text style={{ color: "red" }}>
              {"Lưu ý: tin rao chỉ để mệnh giá tiền Việt Nam Đồng"}
            </Text>
          </Text>
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

export default Step2
