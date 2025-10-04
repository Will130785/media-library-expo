import ThemedText from '@/components/global/themedText'
import ThemedView from '@/components/global/themedView'
import { deleteMediaItem, getMediaItem } from '@/services/media'
import { IMediaItem } from '@/types/media'
import Entypo from '@expo/vector-icons/Entypo'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Link } from 'expo-router'
import { useLocalSearchParams, useRouter } from 'expo-router/build/hooks'
import { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'

const ViewMediaItem = () => {
  const router = useRouter()
  const { id } = useLocalSearchParams()
  const [mediaItem, setMediaItem] = useState<IMediaItem | null>(null)

  const handleGetMediaItem = async () => {
    const res = await getMediaItem(id as string)
    if (!res) {
      return
    }
    setMediaItem(res.mediaItem)
  }

  const handleDeleteMediaItem = async () => {
    const res = await deleteMediaItem(id as string)
    if (!res) {
      return
    }
    router.navigate('/(main)/all-media')
  }

  useEffect(() => {
    handleGetMediaItem()
  }, [])

  return (
    <ThemedView>
      {mediaItem ? (
        <ThemedView>
          <ThemedText>{mediaItem.title}</ThemedText>
          <Link
            href={{
              pathname: '/(main)/edit-media-item/[id]',
              params: { id: id as string },
            }}
          >
            <Entypo name="edit" size={24} color="black" />
          </Link>
          <TouchableOpacity onPress={handleDeleteMediaItem}>
            <MaterialIcons name="delete" size={24} color="black" />
          </TouchableOpacity>
        </ThemedView>
      ) : (
        <ThemedView>
          <ThemedText>Unable to get item</ThemedText>
        </ThemedView>
      )}
    </ThemedView>
  )
}

export default ViewMediaItem
