import React from "react"
import {Text, View, Animated, TouchableOpacity} from "react-native"
import styles from "./styles"
import string from "./string"
import TextInputCustom from "../text-input-custom"
import ButtonCustom from "../button-custom"
import {faFacebookF, faGoogle} from "@fortawesome/free-brands-svg-icons"
import {faUserLock, faMailBulk} from "@fortawesome/free-solid-svg-icons"

const SignIn = ({focusedAnim, email, password, onPress, onChangeText}) => (
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
        returnKeyType={"go"}
      />
      <View style={styles.button_forgot_password}>
        <TouchableOpacity onPress={() => alert("bla bla")}>
          <Text>{string.forgotPassword}</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.button_container}>
      <ButtonCustom
        style={styles.button_signIn}
        label={string.textSignIn}
        textColor={"white"}
        backgroundColor={"#4285F4"}
        onPress={() => onPress()}
      />
      <Text style={styles.or}>{string.or}</Text>
      <View style={styles.social_container}>
        <ButtonCustom
          style={styles.button_custom}
          borderRadius={10}
          icon={faFacebookF}
          iconColor={"white"}
          backgroundColor={"#3B5998"}
          onPress={() => alert("abc")}
        />
        <ButtonCustom
          icon={faGoogle}
          borderRadius={10}
          iconColor={"white"}
          backgroundColor={"red"}
          onPress={() => alert("abc")}
        />
      </View>
    </View>
  </Animated.View>
)

export default SignIn
