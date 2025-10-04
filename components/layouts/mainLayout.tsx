import { Stack } from 'expo-router'
import { StyleSheet } from 'react-native'
import ThemedView from '../global/themedView'
import TopBar from '../global/topBar'

const MainLayout = () => {
  return (
    <ThemedView style={styles.screenContainer}>
      <TopBar />
      <Stack screenOptions={{ headerShown: false, animation: 'none' }} />
    </ThemedView>
  )
}

export default MainLayout

const styles = StyleSheet.create({
  screenContainer: {
    padding: 20,
  },
})
