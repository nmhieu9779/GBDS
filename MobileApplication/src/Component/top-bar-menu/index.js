import React from "react"
import styles from "./styles"
import SafeAreaView from "react-native-safe-area-view"
import {TouchableOpacity, View, Platform, Text} from "react-native"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import {moderateScale} from "@src/utilities/scale"
import NavigationService from "@src/navigation/NavigationService"
import Card from "@src/component/card"

const Title = ({title}) => (
  <Text style={styles.title} numberOfLines={1}>
    {title}
  </Text>
)

const Icon = ({icon, onPress}) =>
  (icon && (
    <TouchableOpacity style={styles.icon} onPress={() => onPress()}>
      <FontAwesomeIcon color={"white"} size={moderateScale(Platform.OS === "ios" ? 20 : 23)} icon={icon} />
    </TouchableOpacity>
  )) || <View style={{width: moderateScale(40)}} />

const TopBarMenu = ({icon, title, titleIsLeft, onPress}) => (
  <SafeAreaView>
    <Card style={styles.container}>
      {titleIsLeft && <Title title={title} />}
      <View style={[styles.itemContainer, {justifyContent: titleIsLeft ? "flex-end" : "flex-start"}]}>
        {icon &&
          icon.map(({icon}, index) => (
            <Icon
              key={index}
              onPress={() => {
                onPress(index)
              }}
              icon={icon || null}
            />
          ))}
      </View>
      {!titleIsLeft && <Title title={title} />}
    </Card>
  </SafeAreaView>
)

export default TopBarMenu
