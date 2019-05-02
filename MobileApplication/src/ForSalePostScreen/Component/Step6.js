import React, { Component } from "react"
import { Platform, StyleSheet, Text, ScrollView } from "react-native"
import constants from "../../Constant"
import Header from "./Header"
import { SafeAreaView } from "react-navigation"
import TextInputCustom from "../../Component/TextInputCustom"

class Step6 extends Component {
  constructor(props) {
    super(props)
    this.state = { name: "", address: "", phoneNumber: "", email: "" }
  }

  render() {
    const { style } = this.props
    return (
      <SafeAreaView style={[styles.container, style]}>
        <Header text={"Liên hệ"} />
        <ScrollView contentContainerStyle={{ alignItems: "center" }}>
          <TextInputCustom
            onChangeText={text => this.setState({ name: text })}
            value={this.state.name}
            style={{
              container: {
                width: constants.width - 10,
                marginBottom: 5
              }
            }}
            label={"Tên liên hệ"}
          />
          <TextInputCustom
            onChangeText={text => this.setState({ address: text })}
            value={this.state.address}
            style={{
              container: {
                width: constants.width - 10,
                marginBottom: 5
              }
            }}
            label={"Địa chỉ"}
          />
          <TextInputCustom
            onChangeText={text => this.setState({ phoneNumber: text })}
            value={this.state.phoneNumber}
            style={{
              container: {
                width: constants.width - 10,
                marginBottom: 5
              }
            }}
            label={"Di động"}
            keyboardType={"numeric"}
          />
          <TextInputCustom
            onChangeText={text => this.setState({ email: text })}
            value={this.state.email}
            style={{
              container: {
                width: constants.width - 10,
                marginBottom: 5
              }
            }}
            label={"Email"}
            keyboardType={"email-address"}
          />
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

export default Step6
