import React, {useState, useEffect} from "react"
import {Text, View, Modal, TouchableOpacity, FlatList} from "react-native"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import {faCaretDown} from "@fortawesome/free-solid-svg-icons"
import SafeAreaView from "react-native-safe-area-view"
import styles from "./styles"
import {moderateScale} from "@src/utilities/scale"

const RenderItem = ({data, visiable, title, onClose}) => {
  const [visiableState, setVisiableState] = useState(false)
  const [heightContainer, setHeightContainer] = useState(0)

  const getHeightContainer = (length) => parseInt(length >= 5 ? 240 : 40 * (length + 1))

  useEffect(() => {
    setHeightContainer(getHeightContainer(data.length))
  }, [data.length])

  useEffect(() => {
    setVisiableState(visiable)
  }, [visiable])

  const _renderItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() => onPressItem({id: item.id, name: item.label, type: item.type || null, selected: index})}
      style={styles.itemContainer_item}>
      <Text style={styles.itemLabel_item}>{item.label}</Text>
    </TouchableOpacity>
  )

  const _keyExtractor = (item, index) => index.toString() + new Date().toString()

  const onPressItem = ({id, name, type, selected}) => {
    onClose({id, name, type, selected})
  }

  return (
    <Modal visible={visiableState} transparent={true} animationType={"slide"}>
      <SafeAreaView style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => onPressItem({id: null, name: null, type: null, selected: -1})}
          activeOpacity={1}
          style={styles.area_tranparent_item}
        />
        <View style={[styles.container_item, {height: moderateScale(heightContainer)}]}>
          <View style={styles.itemContainer_item}>
            <Text style={styles.header_item}>{title}</Text>
          </View>
          <FlatList data={data} keyExtractor={_keyExtractor.bind(this)} renderItem={_renderItem.bind(this)} />
        </View>
      </SafeAreaView>
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
      <RenderItem
        visiable={visiable}
        onClose={({id, name, type, selected}) => {
          setVisiable(false)
          selected >= 0 && onChangeSelected({id, name, type, selected})
        }}
        data={(data.length !== 0 && data) || []}
        title={title}
      />
    </TouchableOpacity>
  )
}

export default ComboBoxBase
