import React, { Component } from "react"
import { StyleSheet, ScrollView, View, Text, Dimensions } from "react-native"
import { SafeAreaView } from "react-navigation"
import Breadcrumb from "./Component/Breadcrumb"
import Step1 from "./Component/Step1"
import Step2 from "./Component/Step2"
import Step3 from "./Component/Step3"
import Step4 from "./Component/Step4"
import Step5 from "./Component/Step5"
import Step6 from "./Component/Step6"
import Step7 from "./Component/Step7"

class ForSalePostScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { step: 0, width: Dimensions.get("screen").width }
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
          <Step5 style={styles.item} ref={r => (this.step5Ref = r)} />
          <Step6 style={styles.item} ref={r => (this.step6Ref = r)} />
          <Step7 style={styles.item} ref={r => (this.step7Ref = r)} />
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
            { label: "Bước 5" },
            { label: "Bước 6" },
            { label: "Bước 7" }
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
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height - 50
  },
  step_container: {
    height: 50,
    width: null,
    flexDirection: "row"
  }
})

export default ForSalePostScreen
