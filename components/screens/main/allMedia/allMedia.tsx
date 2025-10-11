import ThemedScrollView from '@/components/global/themedScrollView'
import ThemedText from '@/components/global/themedText'
import ThemedView from '@/components/global/themedView'
import { getAllMediaItems } from '@/services/media'
import { globalStyles } from '@/styles/globalStyles'
import { IMediaItem } from '@/types/media'
import { useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import MediaItem from './mediaItem'

const AllMedia = () => {
  const { mediaType } = useLocalSearchParams()
  const [mediaItems, setMediaItems] = useState([])

  const handleGetAllMediaItems = async () => {
    const res = await getAllMediaItems(mediaType as string)
    console.log(res)
    if (!res || !res.success) {
      return
    }
    setMediaItems(res.mediaItems)
  }

  useEffect(() => {
    handleGetAllMediaItems()
  }, [])

  return (
    <ThemedScrollView>
      <ThemedText style={globalStyles.h2}>
        Your {mediaType === 'music' && 'Music'}
      </ThemedText>
      {mediaItems && mediaItems.length ? (
        mediaItems.map((mediaItem: IMediaItem) => (
          <MediaItem
            key={mediaItem.id}
            title={mediaItem.title}
            imageUrl={mediaItem.imageurl}
            id={mediaItem.id}
          />
        ))
      ) : (
        <ThemedView>
          <ThemedText>
            You currently have no {mediaType === 'music' && 'music'}
          </ThemedText>
        </ThemedView>
      )}
    </ThemedScrollView>
  )
}

export default AllMedia
