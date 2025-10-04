import { colors } from '@/constants/theme'
import { authContext } from '@/context/authContext'
import { globalStyles } from '@/styles/globalStyles'
import Entypo from '@expo/vector-icons/Entypo'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useRouter } from 'expo-router'
import { use } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import ThemedText from './themedText'
import ThemedView from './themedView'

const TopBar = () => {
  const router = useRouter()
  const { logOut } = use(authContext)
  return (
    <ThemedView style={styles.topBarContainer}>
      <TouchableOpacity onPress={() => router.replace('/')}>
        <Entypo name="home" size={24} color="black" />
      </TouchableOpacity>
      <ThemedText
        style={globalStyles.h1}
        lightColor={colors.light.text}
        darkColor={colors.dark.text}
      >
        MEDIA LIBRARY
      </ThemedText>
      <TouchableOpacity onPress={logOut}>
        <MaterialIcons name="logout" size={24} color="black" />
      </TouchableOpacity>
    </ThemedView>
  )
}

export default TopBar

const styles = StyleSheet.create({
  topBarContainer: {
    flex: 0,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
