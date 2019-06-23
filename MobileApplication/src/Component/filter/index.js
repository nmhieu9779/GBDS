import React, {Component} from "react"
import {TouchableOpacity, Modal} from "react-native"
import AddressInput from "@src/component/address-input"
import styles from "./styles"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import {faSortUp} from "@fortawesome/free-solid-svg-icons"
import SafeAreaView from "react-native-safe-area-view"

class FilterContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <FontAwesomeIcon
          size={50}
          style={{position: "absolute", top: -20, right: 2}}
          icon={faSortUp}
          color={"white"}
        />
        <AddressInput isCity={true} isDistrict={true} onChangeAddress={() => {}} />
      </SafeAreaView>
    )
  }
}

const Filter = ({visiable, onPressClose}) => (
  <Modal style={{flex: 1}} transparent={true} visible={visiable} animationType={"fade"}>
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => onPressClose()}
        activeOpacity={1}
        style={[styles.area_tranparent, {height: 56}]}
      />
      <FilterContainer />
      <TouchableOpacity
        onPress={() => onPressClose()}
        activeOpacity={1}
        style={[styles.area_tranparent, {flex: 2}]}
      />
    </SafeAreaView>
  </Modal>
)

// class Filter extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       visiable: false
//     }
//   }

//   componentWillMount = () => {
//     this.setState({ visiable: this.props.visiable })
//   }

//   componentDidUpdate = prevProps => {
//     if (prevProps.visiable != this.props.visiable) {
//       this.setState({ visiable: this.props.visiable })
//     }
//   }

//   render() {
//     return (
//       <Modal
//         style={{ flex: 1 }}
//         transparent={true}
//         visible={this.props.visiable}
//         animationType={"fade"}
//       >
//         <SafeAreaView style={{ flex: 1 }}>
//           <TouchableOpacity
//             onPress={() => this.props.onPressClose()}
//             activeOpacity={1}
//             style={[styles.area_tranparent, { height: 56 }]}
//           />
//           <FilterContainer />
//           <TouchableOpacity
//             onPress={() => this.props.onPressClose()}
//             activeOpacity={1}
//             style={[styles.area_tranparent, { flex: 2 }]}
//           />
//         </SafeAreaView>
//       </Modal>
//     )
//   }
// }

export default Filter
