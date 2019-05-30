import React, {Component} from "react"
import {Text, ScrollView} from "react-native"
import {stringStep5 as string} from "../string"
import {step5 as styles} from "../styles"
import Header from "../../Component/header-post"
import SafeAreaView from "react-native-safe-area-view"
import MapView, {Marker} from "react-native-maps"

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
        (position) => {
          const region = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }
        },
        (error) => {
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
