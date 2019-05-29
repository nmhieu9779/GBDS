import React, { Component } from "react"
import { ScrollView } from "react-native"
import constants from "../Constant"
import { SafeAreaView } from "react-navigation"
import Breadcrumb from "../Component/breadcrumb"
import TopBarMenu from "../Component/top-bar-menu"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { styles_main as styles } from "./styles"
import { stringMain as string } from "./string"
import Step1 from "./Component/Step1"
import Step2 from "./Component/Step2"
import Step3 from "./Component/Step3"
import Step4 from "./Component/Step4"

class NeedSalePostScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { step: 0 }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TopBarMenu
          icon={{ left: faArrowLeft }}
          title={"Đăng bài mua"}
          onPressLeft={() => {
            this.props.navigation.goBack()
          }}
        />
        <ScrollView
          ref={ref => {
            this.scrollView = ref
          }}
          onMomentumScrollEnd={e => {
            this.setState({
              step: parseInt(
                e.nativeEvent.contentOffset.x / constants.width + 0.1
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
          itemSelected={this.state.step}
          onItemPress={e => {
            this.onPressStepItem(e)
          }}
          data={string.breadcrumb}
        />
      </SafeAreaView>
    )
  }

  onPressStepItem = e => {
    this.scrollView.scrollTo({
      y: 0,
      x: e * constants.width,
      Animation: true
    })
    this.setState({ step: e })
  }
}

export default NeedSalePostScreen
