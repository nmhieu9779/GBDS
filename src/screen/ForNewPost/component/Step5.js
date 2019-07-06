import React from "react"
import {Text, ScrollView, View} from "react-native"
import {stringStep5 as string} from "../string"
import {step5 as styles} from "../styles"
import Header from "@src/component/header-post"
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps"

const Step5 = (props) => {
  return (
    <View style={styles.container}>
      <Header text={string.header} />
      <ScrollView>
        <Text style={styles.note}>{string.suggest}</Text>
        <MapView
          region={{
            latitude: 15.910789634032627,
            longitude: 107.04513503238559,
            longitudeDelta: 15.879991315305233,
            latitudeDelta: 15.806888234208227
          }}
          style={styles.map}
          provider={PROVIDER_GOOGLE}>
          {props.coordinate && (
            <Marker coordinate={props.coordinate} title={"Địa chỉ"} description={props.address} />
          )}
        </MapView>
        <Text style={styles.note}>{string.note}</Text>
      </ScrollView>
    </View>
  )
}

export default Step5
