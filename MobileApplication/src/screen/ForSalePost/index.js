import React, {Component} from "react"
import {ScrollView} from "react-native"
import constants from "@src/constant"
import SafeAreaView from "react-native-safe-area-view"
import Breadcrumb from "@src/component/breadcrumb"
import TopBarMenu from "@src/component/top-bar-menu"
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import Step1 from "./Component/Step1"
import Step2 from "./Component/Step2"
import Step3 from "./Component/Step3"
import Step4 from "./Component/Step4"
import Step5 from "./Component/Step5"
import Step6 from "./Component/Step6"
import Step7 from "./Component/Step7"
import {main as styles} from "./styles"

class ForSalePost extends Component {
  constructor(props) {
    super(props)
    this.state = {step: 0}
  }

  render() {
    return (
      <SafeAreaView style={styles.for_sale_post_container}>
        <TopBarMenu icon={[{icon: faArrowLeft}]} title={"Đăng bài mua"} />
        <ScrollView
          ref={(ref) => {
            this.scrollView = ref
          }}
          onMomentumScrollEnd={(e) => {
            this.setState({
              step: parseInt(e.nativeEvent.contentOffset.x / constants.width + 0.1)
            })
          }}
          pagingEnabled={true}
          horizontal={true}>
          <Step1 />
          <Step2 />
          <Step3 />
          <Step4 />
          <Step5 />
          <Step6 />
          <Step7 />
        </ScrollView>
        <Breadcrumb
          itemSelected={this.state.step}
          onItemPress={(e) => {
            this.onPressStepItem(e)
          }}
          data={constants.ForSalePost.labelStep}
        />
      </SafeAreaView>
    )
  }

  onPressStepItem = (e) => {
    this.scrollView.scrollTo({
      y: 0,
      x: e * constants.width,
      Animation: true
    })
    this.setState({step: e})
  }
}

export default ForSalePost
