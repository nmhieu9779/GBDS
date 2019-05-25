import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#4285F4",
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: "center"
  },
  headerTitle: { fontWeight: "bold", color: "white", fontSize: 20 },
  postContainer: {
    padding: 5,
    borderWidth: 1,
    borderTopWidth: 0
  },
  infoContainer: { flexDirection: "row", marginTop: 10 },
  image: { width: 120, height: 90 },
  info: { paddingLeft: 10, justifyContent: "space-around" },
  price: { fontWeight: "bold" },
  postDate: { color: "#9C9C9C", fontStyle: "italic" },
  footer: {
    width: "100%",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: "#4285F4",
    marginBottom: 20,
    alignItems: "flex-end",
    padding: 5,
    paddingRight: 20
  }
})

export default styles
