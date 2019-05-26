import { StyleSheet } from "react-native"
import { width, moderateScale, height } from "@src/utilities/scale"

export const step1 = StyleSheet.create({
  container: { width: width },
  contentContainerStyle: {
    alignItems: "center"
  },
  labelStyleProductTitle: {
    color: "red"
  },
  area: {
    position: "absolute",
    right: moderateScale(5),
    bottom: moderateScale(3)
  },
  priceContainer: {
    flexDirection: "row",
    padding: moderateScale(5),
    alignItems: "center"
  },
  priceTitle: { fontSize: moderateScale(16), fontWeight: "bold" },
  priceContent: { color: "red", marginLeft: moderateScale(10), flex: 1 },
  addressContainer: {
    flexDirection: "row",
    padding: moderateScale(5),
    alignItems: "center"
  },
  addressTitle: { fontSize: moderateScale(16), fontWeight: "bold" },
  addressTextInput: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 0.5,
    borderRadius: 5,
    marginLeft: moderateScale(10),
    padding: moderateScale(5)
  },
  price: {
    width: moderateScale(width / 2),
    position: "absolute",
    right: moderateScale(5),
    bottom: moderateScale(3)
  }
})

export const step2 = StyleSheet.create({
  container: { width: width },
  noteContent: {
    fontStyle: "italic",
    color: "gray",
    textAlign: "right",
    paddingRight: moderateScale(10)
  },
  note: { color: "red" },
  textInput: {
    textAlignVertical: "top",
    height: moderateScale(width / 2),
    margin: moderateScale(10),
    padding: moderateScale(10),
    borderWidth: 0.5,
    borderColor: "#ccc",
    borderRadius: moderateScale(10)
  },
  suggest: { padding: moderateScale(5) },
  suggestOther: { color: "red" }
})

export const step3 = StyleSheet.create({
  container: { width: width },
  contentContainerStyle: {
    alignItems: "center"
  },
  suggest: {
    fontStyle: "italic",
    color: "gray",
    padding: moderateScale(10)
  },
  containerCombobox: {
    width: width
  },
  comboboxCombobox: { width: width },
  labelCombobox: { fontWeight: "bold", fontSize: moderateScale(16) },
  furnitureContainer: {
    padding: moderateScale(5),
    width: width
  },
  furnitureTitle: {
    fontSize: moderateScale(16),
    fontWeight: "bold",
    marginBottom: moderateScale(5)
  },
  furnitureInput: {
    borderColor: "#ccc",
    borderWidth: 0.5,
    borderRadius: 10,
    padding: moderateScale(5)
  }
})

export const step4 = StyleSheet.create({
  container: { width: width },
  contentContainerStyle: {
    alignItems: "center"
  },
  note: {
    fontStyle: "italic",
    color: "gray",
    padding: moderateScale(10)
  },
  suggest: {
    fontStyle: "italic",
    color: "gray",
    padding: moderateScale(10)
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  image: {
    width: moderateScale(width / 2 - 20),
    height: moderateScale(width / 2 - 20)
  },
  border: {
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: "dashed",
    borderColor: "#C9D9CB"
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  }
})

export const step5 = StyleSheet.create({
  container: { width: width },
  note: {
    fontStyle: "italic",
    color: "gray",
    padding: moderateScale(10)
  },
  map: {
    width: width,
    height: height / 2
  }
})

export const step6 = StyleSheet.create({
  container: { width: width },
  contentContainerStyle: { alignItems: "center" }
})

export const step7 = StyleSheet.create({
  container: { width: width },
  containerCombobox: {
    width: width
  },
  comboboxCombobox: { flex: 3 },
  text: {
    padding: moderateScale(5)
  },
  infoVipName: { fontWeight: "bold" },
  textCB: { color: "blue" },
  textCO: { color: "orange" },
  textCR: { color: "red" },
  textFB: { fontWeight: "bold" },
  textCW: { color: "white" },
  datePickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: moderateScale(5)
  },
  datePickerLabel: { flex: 1 },
  datePicker: { flex: 3 },
  dateIcon: {
    position: "absolute",
    right: 0,
    top: moderateScale(4),
    marginRight: 0
  },
  dateInput: {
    marginRight: moderateScale(36),
    borderRadius: 5
  },
  suggest: {
    fontStyle: "italic",
    color: "gray",
    padding: moderateScale(10)
  },
  footer: { marginBottom: moderateScale(100), alignItems: "center" },
  textFooter: {
    padding: moderateScale(5),
    marginBottom: moderateScale(5),
    width: width
  },
  total: { fontSize: moderateScale(18), fontWeight: "bold", color: "red" },
  btnPost: {
    width: moderateScale(300),
    height: moderateScale(40),
    backgroundColor: "red",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  }
})

export const main = StyleSheet.create({
  for_sale_post_container: { flex: 1, backgroundColor: "white" }
})
