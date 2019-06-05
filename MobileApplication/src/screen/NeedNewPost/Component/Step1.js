import React, {Component} from "react"
import {ScrollView} from "react-native"
import {styles_step1 as styles} from "../styles"
import {string_step1 as string} from "../string"
import AddressInput from "@src/component/address-input"
import TypeProduct from "@src/component/type-product"
import Header from "@src/component/header-post"
import SafeAreaView from "react-native-safe-area-view"

class Step1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productTitle: ""
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header text={string.header} />
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          <TypeProduct isProductType={true} isProductCate={true} postTypeId={0} />
          <AddressInput
            isCity={true}
            isDistrict={true}
            isWard={true}
            isStreet={true}
            onChangeAddress={() => {}}
          />
          <TypeProduct isArea={true} isPrice={true} postTypeId={0} />
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Step1
