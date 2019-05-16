import React, { Component } from "react"
import { Text, ScrollView } from "react-native"
import Header from "../../Component/HeaderPost"
import constants from "../../Constant"
import style from "../style"
import { SafeAreaView } from "react-navigation"

class Step4 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const styles = style.step4
    const string = constants.ForSalePostScreen.step4
    return (
      <SafeAreaView style={[styles.container, this.props.style]}>
        <Header text={string.header} />
        <ScrollView>
          <Text style={styles.note}>{string.note}</Text>
          <Text style={styles.suggest}>{string.suggest}</Text>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Step4
