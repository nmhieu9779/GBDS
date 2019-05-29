import React, {Component} from "react"
import {ScrollView} from "react-native"
import {styles_step3 as styles} from "../styles"
import {string_step3 as string} from "../string"
import Header from "../../Component/header-post"
import {SafeAreaView} from "react-navigation"
import TextInputCustom from "../../Component/text-input-custom"
import {width} from "@src/utilities/scale"

class Step3 extends Component {
  constructor(props) {
    super(props)
    this.state = {name: "", address: "", phoneNumber: "", email: ""}
  }

  render() {
    return (
      <SafeAreaView style={[styles.container, this.props.style]}>
        <Header text={string.header} />
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          <TextInputCustom
            onChangeText={(text) => this.setState({name: text})}
            value={this.state.name}
            width={width * 0.8}
            label={string.nameLabel}
          />
          <TextInputCustom
            onChangeText={(text) => this.setState({address: text})}
            value={this.state.address}
            width={width * 0.8}
            label={string.addressLable}
          />
          <TextInputCustom
            onChangeText={(text) => this.setState({phoneNumber: text})}
            value={this.state.phoneNumber}
            width={width * 0.8}
            label={string.phoneNumberLabel}
            keyboardType={"numeric"}
          />
          <TextInputCustom
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
            width={width * 0.8}
            label={string.emailLabel}
            keyboardType={"email-address"}
          />
        </ScrollView>
      </SafeAreaView>
    )
  }
}
export default Step3
