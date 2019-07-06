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

const Icon = ({icon, onPress, color, data, name}) =>
  (icon && (
    <TouchableOpacity style={styles.icon} onPress={() => onPress()}>
      <FontAwesomeIcon
        color={color ? color : "white"}
        size={scale.moderateScale(Platform.OS === "ios" ? 20 : 20)}
        icon={icon}
      />
      {name === "NOTI" && (
        <View
          style={{
            backgroundColor: "#F35022",
            width: 18,
            height: 18,
            position: "absolute",
            top: -5,
            right: -5,
            borderRadius: 9,
            justifyContent: "center",
            alignItems: "center"
          }}>
          <Text style={{color: "white", fontSize: 13}}>{data}</Text>
        </View>
      )}
    </TouchableOpacity>
  )) || <View style={{width: scale.moderateScale(40)}} />

const TopBarMenu = ({icon, title, titleIsLeft, onPress}) => (
  <SafeAreaView style={styles.container}>
    {titleIsLeft && <Title title={title} />}
    <View style={[styles.itemContainer, {justifyContent: titleIsLeft ? "flex-end" : "flex-start"}]}>
      {icon &&
        icon.map(({icon, name, color, data}, index) => (
          <Icon
            key={index}
            onPress={() => {
              onPress(name)
            }}
            icon={icon || null}
            color={color}
            data={data}
            name={name}
          />
        ))}
    </View>
    {!titleIsLeft && <Title title={title} />}
  </SafeAreaView>
)

export default TopBarMenu
