import React, { Component } from "react"
import { ScrollView } from "react-native"
import constants from "../Constant"
import { SafeAreaView } from "react-navigation"
import Breadcrumb from "../Component/Breadcrumb"
import TopBarMenu from "../Component/Menu/top-bar-menu"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import Step1 from "./Component/Step1"
import Step2 from "./Component/Step2"
import Step3 from "./Component/Step3"
import Step4 from "./Component/Step4"
import Step5 from "./Component/Step5"
import Step6 from "./Component/Step6"
import Step7 from "./Component/Step7"
import style from "./style"

class ForSalePostScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { step: 0 }
  }

  render() {
    return (
      <SafeAreaView style={style.for_sale_post_container}>
        <TopBarMenu
          icon={{ left: faArrowLeft }}
          title={"Đăng bài bán"}
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
          <Step1 style={style.item} ref={r => (this.step1Ref = r)} />
          <Step2 style={style.item} ref={r => (this.step2Ref = r)} />
          <Step3 style={style.item} ref={r => (this.step3Ref = r)} />
          <Step4 style={style.item} ref={r => (this.step4Ref = r)} />
          <Step5 style={style.item} ref={r => (this.step5Ref = r)} />
          <Step6 style={style.item} ref={r => (this.step6Ref = r)} />
          <Step7 style={style.item} ref={r => (this.step7Ref = r)} />
        </ScrollView>
        <Breadcrumb
          styleContainer={style.step_container}
          itemSelected={this.state.step}
          onItemPress={e => {
            this.onPressStepItem(e)
          }}
          data={constants.ForSalePostScreen.labelStep}
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

export default ForSalePostScreen
