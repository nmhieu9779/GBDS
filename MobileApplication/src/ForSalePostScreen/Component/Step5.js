import React, { Component } from "react"
import { Text, ScrollView } from "react-native"
import constants from "../../Constant"
import style from "../style"
import Header from "../../Component/HeaderPost"
import { SafeAreaView } from "react-navigation"
import MapView, { Marker } from "react-native-maps"

const LATITUDE_DELTA = 0.01
const LONGITUDE_DELTA = 0.01

class Step5 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.getCurrentPosition()
  }

  getCurrentPosition() {
    try {
      navigator.geolocation.getCurrentPosition(
        position => {
          const region = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }
          console.log(region)
        },
        error => {
          //TODO: better design
          switch (error.code) {
            case 1:
              if (Platform.OS === "ios") {
                Alert.alert(
                  "",
                  "Para ubicar tu locación habilita permiso para la aplicación en Ajustes - Privacidad - Localización"
                )
              } else {
                Alert.alert(
                  "",
                  "Para ubicar tu locación habilita permiso para la aplicación en Ajustes - Apps - ExampleApp - Localización"
                )
              }
              break
            default:
              Alert.alert("", "Error al detectar tu locación")
          }
        }
      )
    } catch (e) {
      alert(e.message || "")
    }
  }

  render() {
    const styles = style.step5
    const string = constants.ForSalePostScreen.step5
    console.log(this.state)
    return (
      <SafeAreaView style={[styles.container, this.props.style]}>
        <Header text={string.header} />
        <ScrollView>
          <Text style={styles.note}>{string.suggest}</Text>
          <MapView style={styles.map} showsUserLocation={true} />
          <Text style={styles.note}>{string.note}</Text>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Step5
