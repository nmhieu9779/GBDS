import React, {Component, useState} from "react"
import {ScrollView} from "react-native"
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
import {width} from "@src/utilities/scale"
import {main} from "./string"

const ForNewPost = () => {
  const [step, setStep] = useState(0)
  const [dataPost, setDataPost] = useState([])
  let scrollView = React.createRef()

  const onPressStepItem = (e) => {
    scrollView.current.scrollTo({
      y: 0,
      x: e * width,
      Animation: true
    })
    setStep(e)
  }

  const onChangeData = (data) => setDataPost({...dataPost, ...data})
  console.log(dataPost)

  return (
    <SafeAreaView style={styles.for_sale_post_container}>
      <TopBarMenu icon={[{icon: faArrowLeft}]} title={"Đăng bài mua"} />
      <ScrollView
        ref={scrollView}
        onMomentumScrollEnd={(e) => {
          setStep(parseInt(e.nativeEvent.contentOffset.x / width + 0.1))
        }}
        pagingEnabled={true}
        horizontal={true}>
        <Step1 onChangeData={onChangeData.bind(this)} />
        <Step2 onChangeData={onChangeData.bind(this)} />
        <Step3 onChangeData={onChangeData.bind(this)} />
        <Step4 onChangeData={onChangeData.bind(this)} />
        <Step5 onChangeData={onChangeData.bind(this)} />
        <Step6 onChangeData={onChangeData.bind(this)} />
        <Step7 onChangeData={onChangeData.bind(this)} />
      </ScrollView>
      <Breadcrumb
        itemSelected={step}
        onItemPress={(e) => {
          onPressStepItem(e)
        }}
        data={main.labelStep}
      />
    </SafeAreaView>
  )
}

export default ForNewPost
