import React from "react"
import styles from "./styles"
import SafeAreaView from "react-native-safe-area-view"
import {TouchableOpacity, View, Platform, Text} from "react-native"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import {scale} from "@src/utilities"

const Title = ({title}) => (
  <Text style={styles.title} numberOfLines={1}>
    {title}
  </Text>
)

const Icon = ({icon, onPress}) =>
  (icon && (
    <TouchableOpacity style={styles.icon} onPress={() => onPress()}>
      <FontAwesomeIcon
        color={"white"}
        size={scale.moderateScale(Platform.OS === "ios" ? 20 : 20)}
        icon={icon}
      />
    </TouchableOpacity>
  )) || <View style={{width: scale.moderateScale(40)}} />

const TopBarMenu = ({icon, title, titleIsLeft, onPress}) => (
  <SafeAreaView style={styles.container}>
    {titleIsLeft && <Title title={title} />}
    <View style={[styles.itemContainer, {justifyContent: titleIsLeft ? "flex-end" : "flex-start"}]}>
      {icon &&
        icon.map(({icon, name}, index) => (
          <Icon
            key={index}
            onPress={() => {
              onPress(name)
            }}
            icon={icon || null}
          />
        ))}
    </View>
    {!titleIsLeft && <Title title={title} />}
  </SafeAreaView>
)

export default TopBarMenu
