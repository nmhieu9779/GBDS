import {StyleSheet} from "react-native"
import {scale} from "@src/utilities"

export const styles_main = StyleSheet.create({
  container: {flex: 1, backgroundColor: "white"}
})

export const styles_step1 = StyleSheet.create({
  container: {width: scale.WIDTH},
  contentContainerStyle: {
    alignItems: "center"
  }
})

export const styles_step2 = StyleSheet.create({
  container: {width: scale.WIDTH},
  contentContainerStyle: {
    alignItems: "center"
  },
  infoPostLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10
  },
  infoPostContainer: {margin: 10},
  infoPostTextInput: {
    textAlignVertical: "top",
    height: scale.WIDTH / 2,
    width: scale.WIDTH - 10,
    margin: 10,
    padding: 10,
    borderWidth: 0.5,
    borderColor: "#ccc",
    borderRadius: 10
  }
})

export const styles_step3 = StyleSheet.create({
  container: {width: scale.WIDTH},
  contentContainerStyle: {
    alignItems: "center"
  },
  footer: {marginTop: scale.moderateScale(100), alignItems: "center"},
  btnPost: {
    width: scale.moderateScale(300),
    height: scale.moderateScale(40),
    backgroundColor: "red",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  }
})
