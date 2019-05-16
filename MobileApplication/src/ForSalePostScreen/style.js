import constants from "../Constant"

const style = {
  for_sale_post_container: { flex: 1, backgroundColor: "white" },
  item: {
    width: constants.width,
    height: constants.height - 50
  },
  step_container: {
    height: 50,
    width: null,
    flexDirection: "row"
  },
  scrollView: { alignItems: "center" },
  step1: {
    container: { flex: 1 },
    title: {
      labelStyle: {
        color: "red"
      }
    },
    textInput: {
      container: {
        width: constants.width - 10,
        marginBottom: 5
      }
    },
    combobox: {
      container: {
        width: constants.width,
        height: null
      },
      combobox: { flex: 2 }
    },
    area: { position: "absolute", right: 5, bottom: 3 },
    price: {
      container: {
        width: constants.width / 2,
        position: "absolute",
        right: 5,
        bottom: 3
      }
    },
    priceContainer: {
      flexDirection: "row",
      padding: 5,
      alignItems: "center"
    },
    priceTitle: { fontSize: 16, fontWeight: "bold" },
    priceContent: { color: "red", marginLeft: 10, flex: 1 },
    addressContainer: {
      flexDirection: "row",
      padding: 5,
      alignItems: "center"
    },
    addressTitle: { fontSize: 16, fontWeight: "bold" },
    addressTextInput: {
      flex: 1,
      borderColor: "#ccc",
      borderWidth: 0.5,
      borderRadius: 5,
      marginLeft: 10,
      padding: 5
    }
  },
  step2: {
    container: { flex: 1 },
    noteContent: {
      fontStyle: "italic",
      color: "gray",
      textAlign: "right",
      paddingRight: 10
    },
    note: { color: "red" },
    textInput: {
      height: constants.width / 2,
      margin: 10,
      padding: 10,
      borderWidth: 0.5,
      borderColor: "#ccc",
      borderRadius: 10
    },
    suggest: { padding: 5 },
    suggestOther: { color: "red" }
  },
  step3: {
    container: { flex: 1 },
    contentContainerStyle: { alignItems: "center", paddingBottom: 50 },
    suggest: {
      fontStyle: "italic",
      color: "gray",
      padding: 10
    },
    textInputCustom: {
      container: {
        width: constants.width - 10,
        marginBottom: 5
      }
    },
    combobox: {
      container: {
        width: constants.width,
        height: null
      },
      combobox: { flex: 2 },
      label: { fontWeight: "bold", fontSize: 16 }
    },
    furnitureContainer: {
      padding: 5,
      width: constants.width
    },
    furnitureTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
    furnitureInput: {
      borderColor: "#ccc",
      borderWidth: 0.5,
      borderRadius: 10,
      padding: 5
    }
  },
  step4: {
    container: { flex: 1 },
    note: {
      fontStyle: "italic",
      color: "gray",
      padding: 10
    },
    suggest: {
      fontStyle: "italic",
      color: "gray",
      padding: 10
    }
  },
  step5: {
    container: { flex: 1 },
    note: {
      fontStyle: "italic",
      color: "gray",
      padding: 10
    },
    map: {
      width: constants.width,
      height: constants.height / 2
    }
  },
  step6: {
    container: { flex: 1 },
    contentContainerStyle: { alignItems: "center" },
    textInputCustom: {
      container: {
        width: constants.width - 10,
        marginBottom: 5
      }
    }
  },
  step7: {
    container: { flex: 1 },
    combobox: {
      container: {
        width: constants.width
      },
      combobox: { flex: 3 }
    },
    text: {
      padding: 5
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
      padding: 5
    },
    datePickerLabel: { flex: 1 },
    datePicker: { flex: 3 },
    datePickerCustom: {
      dateIcon: {
        position: "absolute",
        right: 0,
        top: 4,
        marginRight: 0
      },
      dateInput: {
        marginRight: 36,
        borderRadius: 5
      }
    },
    suggest: {
      fontStyle: "italic",
      color: "gray",
      padding: 10
    },
    footer: { marginBottom: 100, alignItems: "center" },
    textFooter: {
      padding: 5,
      marginBottom: 5,
      width: constants.width
    },
    total: { fontSize: 18, fontWeight: "bold", color: "red" },
    btnPost: {
      width: 300,
      height: 40,
      backgroundColor: "red",
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center"
    }
  }
}

export default style
