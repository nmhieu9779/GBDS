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
    fontSize: moderateScale(20)
  },
  postContainer: {
    padding: moderateScale(5),
    borderWidth: 1,
    borderTopWidth: 0
  },
  infoContainer: { flexDirection: "row", marginTop: moderateScale(10) },
  image: { width: moderateScale(120), height: moderateScale(90) },
  info: { paddingLeft: moderateScale(10), justifyContent: "space-around" },
  price: { fontWeight: "bold" },
  postDate: { color: "#9C9C9C", fontStyle: "italic" },
  footer: {
    width: "100%",
    borderBottomLeftRadius: moderateScale(5),
    borderBottomRightRadius: moderateScale(5),
    backgroundColor: "transparent",
    marginBottom: moderateScale(20),
    alignItems: "center",
    padding: moderateScale(5),
    paddingRight: moderateScale(20)
  }
})

export default styles
