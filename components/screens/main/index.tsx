import ThemedText from '@/components/global/themedText'
import ThemedView from '@/components/global/themedView'
import { authContext } from '@/context/authContext'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Link } from 'expo-router'
import { use } from 'react'
import { TouchableOpacity } from 'react-native'

const Index = () => {
  const { logOut } = use(authContext)
  return (
    <ThemedView>
      <Link href="/add-media-item">
        <ThemedText>Add Media Item</ThemedText>
      </Link>
      <Link href="/all-media">
        <ThemedText>All Media Items</ThemedText>
      </Link>
      <TouchableOpacity onPress={logOut}>
        <MaterialIcons name="logout" size={24} color="black" />
      </TouchableOpacity>
    </ThemedView>
  )
}

export default Index
