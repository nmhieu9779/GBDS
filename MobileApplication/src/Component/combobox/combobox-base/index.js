import React, { useState, useEffect } from "react"
import { Text, View, Modal, TouchableOpacity, FlatList } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { SafeAreaView } from "react-navigation"
import styles from "./styles"
import { moderateScale } from "@src/utilities/scale"

const RenderItem = ({ data, visiable, title, onClose }) => {
  const [visiableState, setVisiableState] = useState(false)
  const [heightContainer, setHeightContainer] = useState(0)

  const getHeightContainer = length =>
    parseInt(length >= 5 ? 240 : 40 * (length + 1))

  useEffect(() => {
    setHeightContainer(getHeightContainer(data.length))
    setVisiableState(visiable)
  })

  const _renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => onPressItem(index)}
      style={styles.itemContainer_item}
    >
      <Text style={styles.itemLabel_item}>{item.label}</Text>
    </TouchableOpacity>
  )

  const _keyExtractor = (item, index) =>
    index.toString() + new Date().toString()

  const onPressItem = index => {
    onClose(index)
  }

  return (
    <Modal visible={visiableState} transparent={true} animationType={"slide"}>
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => onPressItem()}
          activeOpacity={1}
          style={styles.area_tranparent_item}
        />
        <View
          style={[
            styles.container_item,
            { height: moderateScale(heightContainer) }
          ]}
        >
          <View style={styles.itemContainer_item}>
            <Text style={styles.header_item}>{title}</Text>
          </View>
          <FlatList
            data={data}
            keyExtractor={_keyExtractor.bind(this)}
            renderItem={_renderItem.bind(this)}
          />
        </View>
      </SafeAreaView>
    </Modal>
  )
}

const ComboBoxBase = ({ style, data, title, selected, onChangeSelected }) => {
  const [visiable, setVisiable] = useState(false)

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => setVisiable(true)}
      style={[styles.container, style]}
    >
      <Text style={styles.selected} numberOfLines={1}>
        {selected === -1 ? title : data[selected].label}
      </Text>
      <View style={styles.iconContainer}>
        <FontAwesomeIcon icon={faCaretDown} />
      </View>
      <RenderItem
        visiable={visiable}
        onClose={index => {
          setVisiable(false)
          index >= 0 && onChangeSelected(index)
        }}
        data={data || []}
        title={title}
      />
    </TouchableOpacity>
  )
}

export default ComboBoxBase
