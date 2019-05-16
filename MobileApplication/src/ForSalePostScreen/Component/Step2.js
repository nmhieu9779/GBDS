import React, { Component } from "react"
import { Text, ScrollView, TextInput } from "react-native"
import constants from "../../Constant"
import style from "../style"
import Header from "../../Component/HeaderPost"
import { SafeAreaView } from "react-navigation"

class Step2 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const styles = style.step2
    const string = constants.ForSalePostScreen.step2
    return (
      <SafeAreaView style={[styles.container, this.props.style]}>
        <Header text={string.header} />
        <ScrollView>
          <Text style={styles.noteContent}>
            <Text style={styles.note}>{string.note}</Text>
            {string.noteContent}
          </Text>
          <TextInput style={styles.textInput} multiline={true} />
          <Text style={styles.suggest}>
            {string.suggest}
            <Text style={styles.suggestOther}>{string.suggestOther}</Text>
          </Text>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Step2
