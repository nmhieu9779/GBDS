import React, {Component} from "react"
import {Text, View, TextInput, ScrollView} from "react-native"
import {styles_step2 as styles} from "../styles"
import {string_step2 as string} from "../string"
import TextInputCustom from "@src/component/text-input-custom"
import Header from "@src/component/header-post"
import SafeAreaView from "react-native-safe-area-view"
import {width, moderateScale} from "@src/utilities/scale"

class Step2 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header text={string.header} />
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          <TextInputCustom
            onChangeText={(text) => this.setState({productTitle: text})}
            value={this.state.productTitle}
            width={width - moderateScale(10)}
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
