import React, {Component} from "react"
import {ScrollView} from "react-native"
import SafeAreaView from "react-native-safe-area-view"
import Breadcrumb from "@src/component/breadcrumb"
import TopBarMenu from "@src/component/top-bar-menu"
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import {styles_main as styles} from "./styles"
import {stringMain as string} from "./string"
import Step1 from "./component/Step1"
import Step2 from "./component/Step2"
import Step3 from "./component/Step3"
import {width} from "@src/utilities/scale"

class NeedSalePost extends Component {
  constructor(props) {
    super(props)
    this.state = {step: 0}
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TopBarMenu icon={[{icon: faArrowLeft}]} title={"Đăng bài mua"} />
        <ScrollView
          ref={(ref) => {
            this.scrollView = ref
          }}
          onMomentumScrollEnd={(e) => {
            this.setState({
              step: parseInt(e.nativeEvent.contentOffset.x / width + 0.1)
            })
          }}
          pagingEnabled={true}
          horizontal={true}>
          <Step1 />
          <Step2 />
          <Step3 />
        </ScrollView>
        <Breadcrumb
          itemSelected={this.state.step}
          onItemPress={(e) => {
            this.onPressStepItem(e)
          }}
          data={string.breadcrumb}
        />
      </SafeAreaView>
    )
  }

  onPressStepItem = (e) => {
    this.scrollView.scrollTo({
      y: 0,
      x: e * width,
      Animation: true
    })
    this.setState({step: e})
  }
}

export default NeedSalePost
