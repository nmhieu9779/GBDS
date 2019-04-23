import React, { Component } from "react"
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  FlatList
} from "react-native"
import propTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { SafeAreaView } from "react-navigation"

class RenderItem extends Component {
  constructor(props) {
    super(props)
    this.heightContainer = 0
    this.state = { visiable: false }
  }

  getHeightContainer = data => {
    this.heightContainer = parseInt(
      data.length >= 5 ? 240 : 40 * (data.length + 1)
    )
  }

  componentDidMount = () => {
    this.getHeightContainer(this.props.data)
  }

  componentDidUpdate = prevProps => {
    if (prevProps.visiable != this.props.visiable) {
      this.setState({ visiable: this.props.visiable })
    }
    if (prevProps.data != this.props.data) {
      this.getHeightContainer(this.props.data)
    }
  }

  onPressItem = index => {
    this.props.onClose(index)
  }

  render() {
    return (
      <Modal
        visible={this.state.visiable}
        transparent={true}
        animationType={"slide"}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => this.onPressItem()}
            activeOpacity={1}
            style={stylesListItem.area_tranparent}
          />
          <View
            style={[stylesListItem.container, { height: this.heightContainer }]}
          >
            <View style={stylesListItem.itemContainer}>
              <Text style={stylesListItem.header}>{this.props.title}</Text>
            </View>
            <FlatList
              data={this.props.data}
              keyExtractor={(index, item) => item.id}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  onPress={e => this.onPressItem(index)}
                  style={stylesListItem.itemContainer}
                >
                  <Text style={stylesListItem.itemLabel}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </SafeAreaView>
      </Modal>
    )
  }
}

const stylesListItem = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  area_tranparent: {
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    flex: 1
  },
  itemContainer: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 0.5
  },
  header: {
    opacity: 0.8,
    fontSize: 20
  },
  itemLabel: {
    fontSize: 18,
    color: "blue"
  }
})

class ComboBoxBase extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visiable: false
    }
  }

  componentDidMount = () => {
    this.setState({})
  }

  render() {
    console.disableYellowBox = true
    const { style, data, title, selected } = this.props
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => this.setState({ visiable: true })}
        style={[styles.container, style.container]}
      >
        <Text style={styles.selected} numberOfLines={1}>
          {selected === -1 ? title : data[selected].label}
        </Text>
        <View style={styles.iconContainer}>
          <FontAwesomeIcon icon={faCaretDown} />
        </View>
        <RenderItem
          visiable={this.state.visiable}
          onClose={index => {
            this.setState({ visiable: false })
            index >= 0 ? this.props.onChangeSelected(index) : null
          }}
          data={data}
          title={title}
        />
      </TouchableOpacity>
    )
  }
}

ComboBoxBase.propTypes = {
  style: propTypes.object,
  data: propTypes.array.isRequired,
  defaultSelected: propTypes.number,
  onChangeSelected: propTypes.func
}

ComboBoxBase.defaultProps = {
  style: { container: {} },
  data: [],
  defaultSelected: 0,
  onChangeSelected: () => {}
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#ccc",
    borderWidth: 0.5,
    borderRadius: 5
  },
  selected: {
    flex: 1,
    padding: 5,
    paddingLeft: 10
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderLeftColor: "#ccc",
    borderLeftWidth: 0.5,
    padding: 5
  }
})

export default ComboBoxBase
