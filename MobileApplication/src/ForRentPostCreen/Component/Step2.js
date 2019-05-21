import React, { Component } from "react"
import { Text, View, TextInput, ScrollView } from "react-native"
import { styles_step2 as styles } from "../styles"
import { string_step2 as string } from "../string"
import TextInputCustom from "../../Component/TextInputCustom"
import Header from "../../Component/HeaderPost"
import { SafeAreaView } from "react-navigation"

class Step2 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <SafeAreaView style={this.props.style}>
        <Header text={string.header} />
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          <TextInputCustom
            onChangeText={text => this.setState({ productTitle: text })}
            value={this.state.productTitle}
            style={{
              labelStyle: styles.labelTextInputCustomStyle,
              container: styles.containerTextInputCustom
            }}
            label={string.productTitle}
          />
          <View style={styles.infoPostContainer}>
            <Text style={styles.infoPostLabel}>{string.infoPostLabel}</Text>
            <TextInput style={styles.infoPostTextInput} multiline={true} />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Step2
