import React, { Component } from "react"
import { Text, View, TextInput, ScrollView } from "react-native"
import constants from "../../Constant"
import propTypes from "prop-types"
import TextInputCustom from "../../Component/TextInputCustom"
import ComboBox from "../../Component/combobox"
import Header from "../../Component/HeaderPost"
import { SafeAreaView } from "react-navigation"
import AddressInput from "../../Component/address-input"
import TypeProduct from "../../Component/type-product"
import style from "../style"

class Step1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productTypeSelected: -1,
      productCateSelected: -1,
      productTitle: "",
      area: "",
      price: "",
      priceSelected: -1,
      address: "",
      homeNumber: ""
    }
  }

  createNewData = (data, index) => {
    let listData = this.state.listData
    listData[index] = data
    return listData
  }

  render() {
    const styles = style.step1
    const string = constants.ForSalePostScreen.step1
    return (
      <SafeAreaView style={[styles.container, this.props.style]}>
        <Header text={string.header} />
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          <TextInputCustom
            onChangeText={text => this.setState({ productTitle: text })}
            value={this.state.productTitle}
            style={Object.assign(styles.title, styles.textInput)}
            label={string.productTitle}
          />
          <TypeProduct
            isProductType={true}
            isProductCate={true}
            postTypeId={1}
          />
          <AddressInput
            isCity={true}
            isDistrict={true}
            isWard={true}
            isStreet={true}
            onChangeAddress={address => this.setState({ address: address })}
          />
          <TextInputCustom
            onChangeText={text => this.setState({ area: text })}
            value={this.state.area}
            style={styles.textInput}
            label={string.area}
            keyboardType={"numeric"}
          >
            <Text style={styles.area}>{string.areaString}</Text>
          </TextInputCustom>
          <TextInputCustom
            onChangeText={text => this.setState({ price: text })}
            value={this.state.price}
            style={styles.textInput}
            label={string.priceLabel}
            keyboardType={"numeric"}
          >
            <TypeProduct isPriceUnit={true} style={styles.price} />
          </TextInputCustom>
          <View style={styles.priceContainer}>
            <Text style={styles.priceTitle}>{string.priceTitle}</Text>
            <Text style={styles.priceContent}>100000</Text>
          </View>
          <View style={styles.addressContainer}>
            <Text style={styles.addressTitle}>{string.addressTitle}</Text>
            <TextInput
              style={styles.addressTextInput}
              multiline={true}
              value={this.state.homeNumber + this.state.address}
              onChangeText={text =>
                this.setState({
                  homeNumber: text.replace(this.state.address, "")
                })
              }
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

Step1.propTypes = {
  style: propTypes.object.isRequired
}

Step1.defaultProps = {
  style: { flex: 1 }
}

export default Step1
