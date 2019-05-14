import React, { Component } from "react"
import { Platform, StyleSheet, Text, ScrollView } from "react-native"
import constants from "../../Constant"
import Header from "../../Component/HeaderPost"
import { SafeAreaView } from "react-navigation"
// import MapView from "react-native-maps"

class Step5 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { style } = this.props
    return (
      <SafeAreaView style={[styles.container, style]}>
        <Header text={"Bản đồ"} />
        <ScrollView>
          <Text
            style={{
              fontStyle: "italic",
              color: "gray",
              padding: 10
            }}
          >
            {
              "Để tăng độ tin cậy và tin rao được nhiều người quan tâm hơn, hãy sửa vị trí tin rao của bạn trên bản đồ bằng cách Chọn lại vị trí bản đồ"
            }
          </Text>
          {/* <MapView
            style={{
              width: constants.width,
              height: constants.height / 2
            }}
            region={{
              latitude: 42.882004,
              longitude: 74.582748,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
            showsUserLocation={true}
          /> */}
          <Text
            style={{
              fontStyle: "italic",
              color: "gray",
              padding: 10
            }}
          >
            {
              "Có thể dữ liệu bản đồ không chính xác. Vì vậy nếu có bất kỳ sai sót nào xin bạn hãy báo cho chúng tôi để khắc phục kịp thời."
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

export default Step5
