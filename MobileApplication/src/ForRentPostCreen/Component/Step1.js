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
import ComboBox from "../../Component/combobox"
import Header from "../../Component/HeaderPost"
import { SafeAreaView } from "react-navigation"

class Step1 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount = () => {}
  render() {
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
          <View style={{ marginTop: 20 }}>
            <Text>{"Nội dung đăng tin"}</Text>
            <TextInput
              style={{
                height: constants.width / 2,
                width: constants.width - 20,
                margin: 10,
                padding: 10,
                borderWidth: 0.5,
                borderColor: "#ccc",
                borderRadius: 10
              }}
              multiline={true}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
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
