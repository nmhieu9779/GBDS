import React, {Component} from "react"
import {Text, View, TextInput, ScrollView} from "react-native"
import {styles_step1 as styles} from "../styles"
import {string_step1 as string} from "../string"
import AddressInput from "../../Component/address-input"
import TypeProduct from "../../Component/type-product"
import Header from "../../Component/header-post"
import {SafeAreaView} from "react-navigation"

class Step1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productTitle: ""
    }
  }

  render() {
    return (
      <SafeAreaView style={this.props.style}>
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
