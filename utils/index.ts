import AsyncStorage from '@react-native-async-storage/async-storage'

export const getTokenFromStorage = async () => {
  const authData = await AsyncStorage.getItem('auth-key')
  if (!authData) {
    return null
  }
  const parsedAuthData = JSON.parse(authData)
  if (!parsedAuthData.token) {
    return null
  }
  return parsedAuthData.token
}
