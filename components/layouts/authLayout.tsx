import { Stack } from 'expo-router'
import { StyleSheet } from 'react-native'
import ThemedView from '../global/themedView'

const AuthLayout = () => {
  return (
    <ThemedView style={styles.screenContainer}>
      <Stack screenOptions={{ headerShown: false, animation: 'none' }} />
    </ThemedView>
  )
}

export default AuthLayout

const styles = StyleSheet.create({
  screenContainer: {
    padding: 20,
  },
})
