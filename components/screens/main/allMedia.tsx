import ThemedText from '@/components/global/themedText'
import ThemedView from '@/components/global/themedView'
import { getAllMediaItems } from '@/services/media'
import { useEffect, useState } from 'react'

const AllMedia = () => {
  const [mediaItems, setMediaItems] = useState([])

  const handleGetAllMediaItems = async () => {
    const res = await getAllMediaItems()
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
    <ThemedView>
      <ThemedText>Your Media Items</ThemedText>
      {mediaItems && mediaItems.length ? (
        mediaItems.map((mediaItem: any) => (
          <ThemedView key={mediaItem.id}>
            <ThemedText>{mediaItem.title}</ThemedText>
          </ThemedView>
        ))
      ) : (
        <ThemedView>
          <ThemedText>You currently have no media items</ThemedText>
        </ThemedView>
      )}
    </ThemedView>
  )
}

export default AllMedia
