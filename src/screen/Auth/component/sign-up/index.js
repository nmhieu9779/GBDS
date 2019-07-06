import React from "react"
import {View, Animated} from "react-native"
import styles from "./styles"
import string from "./string"
import TextInputCustom from "../text-input-custom"
import ButtonCustom from "../button-custom"
import {faUser, faUserLock, faMailBulk, faPhone} from "@fortawesome/free-solid-svg-icons"

const SignUp = ({focusedAnim, fullName, password, email, phone, onChangeText, onPress}) => (
  <Animated.View
    style={{
      opacity: focusedAnim.interpolate({
        inputRange: [0, 2],
        outputRange: [0, 1]
      })
    }}>
    <View style={styles.input_container}>
      <TextInputCustom
        style={styles.input}
        icon={faMailBulk}
        placeholder={string.email}
        value={email}
        onChangeText={(text) => onChangeText(text, "email")}
        keyboardType={"email-address"}
        returnKeyType={"next"}
      />
      <TextInputCustom
        style={styles.input}
        icon={faUserLock}
        placeholder={string.password}
        value={password}
        onChangeText={(text) => onChangeText(text, "password")}
        secureTextEntry={true}
        returnKeyType={"next"}
      />
    </View>
    <View style={styles.button_container}>
      <ButtonCustom
        style={styles.button_signUp}
        label={string.textSignUp}
        textColor={"white"}
        backgroundColor={"#4285F4"}
        onPress={() => onPress()}
      />
    </View>
  </Animated.View>
)

export default SignUp
