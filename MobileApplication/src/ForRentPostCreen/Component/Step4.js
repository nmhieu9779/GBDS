import React, { Component } from "react"
import { Platform, StyleSheet, Text, ScrollView } from "react-native"
import Header from "../../Component/HeaderPost"
import { SafeAreaView } from "react-navigation"

class Step4 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { style } = this.props
    return (
      <SafeAreaView style={[styles.container, style]}>
        <Header text={"Hình ảnh và video"} />
        <ScrollView>
          <Text
            style={{
              fontStyle: "italic",
              color: "gray",
              padding: 10
            }}
          >
            {
              "Tối đa 8 ảnh với tin thường và 16 với tin VIP. Mỗi ảnh tối đa 2MB"
            }
          </Text>
          <Text
            style={{
              fontStyle: "italic",
              color: "gray",
              padding: 10
            }}
          >
            {
              "Tin rao có ảnh sẽ được xem nhiều hơn gấp 10 lần và được nhiều người gọi gấp 5 lần so với tin rao không có ảnh. Hãy đăng ảnh để được giao dịch nhanh chóng!"
            }
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

export default Step4
