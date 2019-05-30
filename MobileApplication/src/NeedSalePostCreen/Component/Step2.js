import React, {Component} from "react"
import {Text, View, TextInput, ScrollView} from "react-native"
import {styles_step2 as styles} from "../styles"
import {string_step2 as string} from "../string"
import TextInputCustom from "../../Component/text-input-custom"
import Header from "../../Component/header-post"
import SafeAreaView from "react-native-safe-area-view"
import {width} from "@src/utilities/scale"

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
            onChangeText={(text) => this.setState({productTitle: text})}
            value={this.state.productTitle}
            width={width * 0.8}
            color={"red"}
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
