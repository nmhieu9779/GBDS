import { StyleSheet } from "react-native"
import { moderateScale } from "@src/utilities/scale"

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#4285F4",
    padding: moderateScale(10),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: "center"
  },
  headerTitle: {
    fontWeight: "bold",
    color: "white",
    fontSize: moderateScale(18)
  },
  container: {
    padding: moderateScale(5),
    borderColor: "#ccc",
    borderLeftWidth: moderateScale(0.5),
    borderRightWidth: moderateScale(0.5)
  },
  postContainer: {
    padding: moderateScale(5),
    borderRadius: moderateScale(5),
    borderWidth: 1
  },
  infoContainer: { flexDirection: "row", marginTop: moderateScale(10) },
  image: { width: moderateScale(120), height: moderateScale(90) },
  info: { paddingLeft: moderateScale(10), justifyContent: "space-around" },
  price: { fontWeight: "bold" },
  postDate: { color: "#9C9C9C", fontStyle: "italic" },
  footer: {
    width: "100%",
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
    backgroundColor: "transparent",
    marginBottom: moderateScale(10),
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: moderateScale(0.5),
    borderTopWidth: 0
  },
  footerText: { fontWeight: "bold", fontSize: moderateScale(18) }
})

export default styles
