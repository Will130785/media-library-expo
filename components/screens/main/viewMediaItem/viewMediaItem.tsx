import ThemedScrollView from '@/components/global/themedScrollView'
import ThemedText from '@/components/global/themedText'
import ThemedView from '@/components/global/themedView'
import { deleteMediaItem, getMediaItem } from '@/services/media'
import { globalStyles } from '@/styles/globalStyles'
import { IMediaItem } from '@/types/media'
import { useLocalSearchParams, useRouter } from 'expo-router/build/hooks'
import { useEffect, useState } from 'react'
import { Image, StyleSheet } from 'react-native'
import EditDelete from './editDelete'

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
    router.navigate({
      pathname: '/(main)/all-media/[mediaType]',
      params: { mediaType: mediaItem?.mediatype as string },
    })
  }

  useEffect(() => {
    handleGetMediaItem()
  }, [])

  return (
    <>
      {mediaItem ? (
        <ThemedScrollView>
          {mediaItem.imageurl && (
            <ThemedView style={globalStyles.standardContainer}>
              <Image
                style={styles.mainImage}
                source={{ uri: mediaItem.imageurl }}
              />
            </ThemedView>
          )}
          <ThemedView style={globalStyles.standardContainer}>
            {mediaItem.mediatype === 'music' && (
              <ThemedView style={styles.musicTitleContainer}>
                <ThemedText>{mediaItem.title}</ThemedText>
                <ThemedText>{mediaItem.artist}</ThemedText>
                <EditDelete
                  id={id as string}
                  handleDeleteMediaItem={handleDeleteMediaItem}
                />
              </ThemedView>
            )}
          </ThemedView>
        </ThemedScrollView>
      ) : (
        <ThemedView>
          <ThemedText>Unable to get item</ThemedText>
        </ThemedView>
      )}
    </>
  )
}

export default ViewMediaItem

const styles = StyleSheet.create({
  mainImage: {
    width: '100%',
    height: 300,
  },
  musicTitleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
