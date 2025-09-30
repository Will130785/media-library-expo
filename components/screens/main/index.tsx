import ThemedText from '@/components/global/themedText'
import ThemedView from '@/components/global/themedView'
import { Link } from 'expo-router'

const Index = () => {
  return (
    <ThemedView>
      <Link href="/add-media-item">
        <ThemedText>Add Media Item</ThemedText>
      </Link>
      <Link href="/all-media">
        <ThemedText>All Media Items</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Index
