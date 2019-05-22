import React, { Component } from "react"
import { ScrollView } from "react-native"
import { styles_step3 as styles } from "../styles"
import { string_step3 as string } from "../string"
import Header from "../../Component/HeaderPost"
import { SafeAreaView } from "react-navigation"
import TextInputCustom from "../../Component/TextInputCustom"

class Step3 extends Component {
  constructor(props) {
    super(props)
    this.state = { name: "", address: "", phoneNumber: "", email: "" }
  }

  render() {
    return (
      <SafeAreaView style={[styles.container, this.props.style]}>
        <Header text={string.header} />
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          <TextInputCustom
            onChangeText={text => this.setState({ name: text })}
            value={this.state.name}
            style={{ container: styles.textInputCustomContainer }}
            label={string.nameLabel}
          />
          <TextInputCustom
            onChangeText={text => this.setState({ address: text })}
            value={this.state.address}
            style={{ container: styles.textInputCustomContainer }}
            label={string.addressLable}
          />
          <TextInputCustom
            onChangeText={text => this.setState({ phoneNumber: text })}
            value={this.state.phoneNumber}
            style={{ container: styles.textInputCustomContainer }}
            label={string.phoneNumberLabel}
            keyboardType={"numeric"}
          />
          <TextInputCustom
            onChangeText={text => this.setState({ email: text })}
            value={this.state.email}
            style={{ container: styles.textInputCustomContainer }}
            label={string.emailLabel}
            keyboardType={"email-address"}
          />
        </ScrollView>
      </SafeAreaView>
    )
  }
}
export default Step3
