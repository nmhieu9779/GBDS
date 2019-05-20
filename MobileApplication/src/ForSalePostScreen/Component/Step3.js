import React, { Component } from "react"
import { Text, ScrollView, View, TextInput } from "react-native"
import constants from "../../Constant"
import style from "../style"
import { SafeAreaView } from "react-navigation"
import TextInputCustom from "../../Component/TextInputCustom"
import Header from "../../Component/HeaderPost"
import ComboBox from "../../Component/combobox"

class Step3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: "",
      landWidth: "",
      floorNumbers: "",
      roomNumber: "",
      toiletNumber: "",
      homeDirection: -1,
      baconDirection: -1
    }
  }

  render() {
    const styles = style.step3
    const string = constants.ForSalePostScreen.step3
    return (
      <SafeAreaView style={[styles.container, this.props.style]}>
        <Header text={string.header} />
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          <Text style={styles.suggest}>{string.suggest}</Text>
          <TextInputCustom
            onChangeText={text => this.setState({ width: text })}
            value={this.state.width}
            style={styles.textInputCustom}
            label={string.widthLabel}
            keyboardType={"numeric"}
          />
          <TextInputCustom
            onChangeText={text => this.setState({ landWidth: text })}
            value={this.state.landWidth}
            style={styles.textInputCustom}
            label={string.landWidthLabel}
            keyboardType={"numeric"}
          />
          <ComboBox
            style={styles.combobox}
            data={string.dataDirection}
            selected={this.state.homeDirection}
            title={string.homeDirection.title}
            label={string.homeDirection.label}
            onChangeSelected={selected => {
              this.setState({ homeDirection: selected })
            }}
          />
          <ComboBox
            style={styles.combobox}
            data={string.dataDirection}
            selected={this.state.baconDirection}
            title={string.baconDirection.title}
            label={string.baconDirection.label}
            onChangeSelected={selected => {
              this.setState({ baconDirection: selected })
            }}
          />
          <TextInputCustom
            onChangeText={text => this.setState({ floorNumbers: text })}
            value={this.state.floorNumbers}
            style={styles.textInputCustom}
            label={string.floorNumbersLabel}
            keyboardType={"numeric"}
          />
          <TextInputCustom
            onChangeText={text => this.setState({ roomNumber: text })}
            value={this.state.roomNumber}
            style={styles.textInputCustom}
            label={string.roomNumbersLabel}
            keyboardType={"numeric"}
          />
          <TextInputCustom
            onChangeText={text => this.setState({ toiletNumber: text })}
            value={this.state.toiletNumber}
            style={styles.textInputCustom}
            label={string.toiletNumbersLabel}
            keyboardType={"numeric"}
          />
          <View style={styles.furnitureContainer}>
            <Text style={styles.furnitureTitle}>{string.furnitureTitle}</Text>
            <TextInput
              style={styles.furnitureInput}
              multiline={true}
              //   value={}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Step3
