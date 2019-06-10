import React, {Component} from "react"
import {ScrollView, TouchableOpacity, Text} from "react-native"
import {styles_step3 as styles} from "../styles"
import {string_step3 as string} from "../string"
import Header from "@src/component/header-post"
import SafeAreaView from "react-native-safe-area-view"
import TextInputCustom from "@src/component/text-input-custom"
import {WIDTH, moderateScale} from "@src/utilities/scale"

class Step3 extends Component {
  constructor(props) {
    super(props)
    this.state = {name: "", address: "", phoneNumber: "", email: ""}
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header text={string.header} />
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          <TextInputCustom
            onChangeText={(text) => this.setState({name: text})}
            value={this.state.name}
            width={WIDTH - moderateScale(10)}
            label={string.nameLabel}
          />
          <TextInputCustom
            onChangeText={(text) => this.setState({address: text})}
            value={this.state.address}
            width={WIDTH - moderateScale(10)}
            label={string.addressLable}
          />
          <TextInputCustom
            onChangeText={(text) => this.setState({phoneNumber: text})}
            value={this.state.phoneNumber}
            width={WIDTH - moderateScale(10)}
            label={string.phoneNumberLabel}
            keyboardType={"numeric"}
          />
          <TextInputCustom
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
            width={WIDTH - moderateScale(10)}
            label={string.emailLabel}
            keyboardType={"email-address"}
          />
          <SafeAreaView style={styles.footer}>
            <TouchableOpacity style={styles.btnPost}>
              <Text style={{color: "white", fontWeight: "bold"}}>{"Đăng bài"}</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
export default Step3
