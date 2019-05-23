import { StyleSheet, Platform } from "react-native"

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#b9c1ca",
    ...Platform.select({ ios: { height: 51 }, android: { height: 52 } }),
    margin: 0,
    padding: 0
  },
  labelContainer: {
    position: "absolute"
  },
  label: { fontSize: 16, fontWeight: "bold" },
  input: {
    position: "absolute",
    bottom: 3,
    ...Platform.select({
      ios: {
        paddingTop: 5,
        paddingBottom: 5
      },
      android: {
        padding: 0
      }
    }),
    paddingLeft: 15,
    paddingRight: 15,
    margin: 0,
    opacity: 0.9
  },
  border: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 3
  }
})

export default styles
