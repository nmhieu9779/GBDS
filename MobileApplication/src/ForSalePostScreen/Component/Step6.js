import React, { Component } from "react"
import { ScrollView } from "react-native"
import constants from "../../Constant"
import style from "../style"
import Header from "../../Component/HeaderPost"
import { SafeAreaView } from "react-navigation"
import TextInputCustom from "../../Component/TextInputCustom"

class Step6 extends Component {
  constructor(props) {
    super(props)
    this.state = { name: "", address: "", phoneNumber: "", email: "" }
  }

  render() {
    const styles = style.step6
    const string = constants.ForSalePostScreen.step6
    return (
      <SafeAreaView style={[styles.container, this.props.style]}>
        <Header text={string.header} />
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          <TextInputCustom
            onChangeText={text => this.setState({ name: text })}
            value={this.state.name}
            style={styles.textInputCustom}
            label={string.nameLabel}
          />
          <TextInputCustom
            onChangeText={text => this.setState({ address: text })}
            value={this.state.address}
            style={styles.textInputCustom}
            label={string.addressLable}
          />
          <TextInputCustom
            onChangeText={text => this.setState({ phoneNumber: text })}
            value={this.state.phoneNumber}
            style={styles.textInputCustom}
            label={string.phoneNumberLabel}
            keyboardType={"numeric"}
          />
          <TextInputCustom
            onChangeText={text => this.setState({ email: text })}
            value={this.state.email}
            style={styles.textInputCustom}
            label={string.emailLabel}
            keyboardType={"email-address"}
          />
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Step6
