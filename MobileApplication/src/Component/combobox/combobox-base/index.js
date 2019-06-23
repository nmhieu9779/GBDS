import React, {useState} from "react"
import {Text, View, TouchableOpacity, FlatList} from "react-native"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import {faCaretDown} from "@fortawesome/free-solid-svg-icons"
import styles from "./styles"
import {scale} from "@src/utilities"
import Modal from "react-native-modal"

const RenderItem = ({data, visiable, title, onClose, onChange}) => {
  const getHeightContainer = (length) => parseInt(length >= 5 ? 240 : 40 * (length + 1))
  let heightContainer = getHeightContainer(data.length)

  const _renderItem = ({item, index}) => (
    <TouchableOpacity
      onPress={onPressItem.bind(this, {
        id: item.id,
        name: item.label,
        type: item.type === 0 ? 0 : item.type || null,
        selected: index,
        cost: item.cost || null,
        min: item.min === 0 ? 0 : item.min || null,
        max: item.max === -1 ? -1 : item.max || null
      })}
      style={styles.itemContainer_item}>
      <Text style={styles.itemLabel_item}>{item.label}</Text>
    </TouchableOpacity>
  )

  const _keyExtractor = (item, index) => index.toString() + new Date().toString()
  const onPressItem = (params) => {
    onChange(params)
    onClose()
  }
  return (
    <Modal
      isVisible={visiable}
      deviceHeight={scale.HEIGHT}
      onBackdropPress={onClose.bind()}
      onSwipeComplete={onClose.bind()}
      style={styles.modalContainer}>
      <View style={[styles.container_item, {height: scale.moderateScale(heightContainer)}]}>
        <View style={styles.itemContainer_item}>
          <Text style={styles.header_item}>{title}</Text>
        </View>
        <FlatList data={data} keyExtractor={_keyExtractor.bind()} renderItem={_renderItem.bind()} />
      </View>
    </Modal>
  )
}

const ComboBoxBase = ({style, data, title, selected, onChangeSelected, enable, name}) => {
  const [visiable, setVisiable] = useState(false)
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        enable && setVisiable(true)
      }}
      style={[styles.container, style, {backgroundColor: enable ? "white" : "#ECECEC"}]}>
      <Text style={styles.selected} numberOfLines={1}>
        {selected === -1 ? title : name}
      </Text>
      <View style={styles.iconContainer}>
        <FontAwesomeIcon icon={faCaretDown} />
      </View>
      {visiable && (
        <RenderItem
          visiable={visiable}
          onClose={() => setVisiable(false)}
          onChange={onChangeSelected.bind()}
          data={data.length !== 0 ? data : []}
          title={title}
        />
      )}
    </TouchableOpacity>
  )
}

export default ComboBoxBase
