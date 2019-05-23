import React from "react"
import { SafeAreaView } from "react-navigation"
import styles from "./styles"

const SafeAreaViewBoxShadow = ({ style, children }) => (
  <SafeAreaView style={[style, styles.boxShadow]}>{children}</SafeAreaView>
)

export default SafeAreaViewBoxShadow
