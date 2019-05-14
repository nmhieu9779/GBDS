import React, { Component } from "react"
import { StyleSheet, ScrollView } from "react-native"
import constants from "../Constant"
import { SafeAreaView } from "react-navigation"
import Breadcrumb from "../Component/Breadcrumb"
import Step1 from "./Component/Step1"
import Step2 from "./Component/Step2"
import Step3 from "./Component/Step3"
import Step4 from "./Component/Step4"

class ForRentPostScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { step: 0, width: constants.width }
  }

  render() {
    return (
      <SafeAreaView style={styles.for_sale_post_container}>
        <ScrollView
          ref={ref => {
            this.scrollView = ref
          }}
          onMomentumScrollEnd={e => {
            this.setState({
              step: parseInt(
                e.nativeEvent.contentOffset.x / this.state.width + 0.1
              )
            })
          }}
          pagingEnabled={true}
          horizontal={true}
        >
          <Step1 style={styles.item} ref={r => (this.step1Ref = r)} />
          <Step2 style={styles.item} ref={r => (this.step2Ref = r)} />
          <Step3 style={styles.item} ref={r => (this.step3Ref = r)} />
          <Step4 style={styles.item} ref={r => (this.step4Ref = r)} />
        </ScrollView>
        <Breadcrumb
          styleContainer={styles.step_container}
          itemSelected={this.state.step}
          onItemPress={e => {
            this.onPressStepItem(e)
          }}
          data={[
            { label: "Bước 1" },
            { label: "Bước 2" },
            { label: "Bước 3" },
            { label: "Bước 4" },
          ]}
        />
      </SafeAreaView>
    )
  }

  onPressStepItem = e => {
    this.scrollView.scrollTo({
      y: 0,
      x: e * this.state.width,
      Animation: true
    })
    this.setState({ step: e })
  }
}

const styles = StyleSheet.create({
  for_sale_post_container: { flex: 1, backgroundColor: "white" },

  item: {
    width: constants.width,
    height: constants.height - 50
  },
  step_container: {
    height: 50,
    width: null,
    flexDirection: "row"
  }
})

export default ForRentPostScreen
