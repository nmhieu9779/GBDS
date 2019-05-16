import React, { Component } from "react"
import { Text, View, TextInput, ScrollView } from "react-native"
import constants from "../../Constant"
import propTypes from "prop-types"
import TextInputCustom from "../../Component/TextInputCustom"
import ComboBox from "../../Component/ComboBox"
import Header from "../../Component/HeaderPost"
import { SafeAreaView } from "react-navigation"
import AddressInput from "../../Component/AddressInput"
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
        <ScrollView contentContainerStyle={styles.scrollView}>
          <TextInputCustom
            onChangeText={text => this.setState({ productTitle: text })}
            value={this.state.productTitle}
            style={Object.assign(styles.title, styles.textInput)}
            label={string.productTitle}
          />
          <ComboBox
            style={styles.combobox}
            data={string.productType.data}
            selected={this.state.productTypeSelected}
            title={string.productType.title}
            label={string.productType.label}
            onChangeSelected={selected => {
              this.onChangeSelected(selected)
            }}
          />
          <ComboBox
            style={styles.combobox}
            data={[]}
            selected={this.state.productCateSelected}
            title={string.productCate.title}
            label={string.productCate.label}
            onChangeSelected={selected => {
              this.onChangeSelected(selected)
            }}
          />
          <AddressInput
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
            <ComboBox
              style={styles.price}
              data={[]}
              selected={this.state.priceSelected}
              title={string.price.title}
              onChangeSelected={selected => {
                this.setState({ priceSelected: selected })
              }}
            />
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
