import React, { Component } from "react"
import { Text, ScrollView } from "react-native"
import constants from "../../Constant"
import style from "../style"
import Header from "../../Component/HeaderPost"
import { SafeAreaView } from "react-navigation"
// import MapView from "react-native-maps"

class Step5 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const styles = style.step5
    const string = constants.ForSalePostScreen.step5
    return (
      <SafeAreaView style={[styles.container, this.props.style]}>
        <Header text={string.header} />
        <ScrollView>
          <Text style={styles.note}>{string.suggest}</Text>
          {/* <MapView
            style={styles.map}
            region={{
              latitude: 42.882004,
              longitude: 74.582748,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
            showsUserLocation={true}
          /> */}
          <Text style={styles.note}>{string.note}</Text>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Step5
