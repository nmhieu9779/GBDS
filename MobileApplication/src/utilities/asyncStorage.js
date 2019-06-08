import AsyncStorage from "@react-native-community/async-storage"

export const getItemAsyncStorage = async (keyName) => {
  let data = await AsyncStorage.getItem(keyName)
  return data && JSON.parse(data)
}

export const setItemAsyncStorage = async ({keyName, data}) => {
  await AsyncStorage.removeItem(keyName)
  await AsyncStorage.setItem(keyName, JSON.stringify(data))
}
