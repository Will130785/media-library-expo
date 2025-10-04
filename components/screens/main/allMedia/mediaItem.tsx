import ThemedText from '@/components/global/themedText'
import ThemedView from '@/components/global/themedView'
import { Link } from 'expo-router'
import { Image, StyleSheet } from 'react-native'

interface IMediaItemProps {
  id: string
  title: string
  imageUrl: string
}

const MediaItem = ({ title, imageUrl, id }: IMediaItemProps) => {
  return (
    <Link
      style={styles.mediaItemLink}
      href={{
        pathname: '/(main)/view-media-item/[id]',
        params: { id },
      }}
    >
      <ThemedView style={styles.mediaItemContainer}>
        <ThemedText>{title}</ThemedText>
        <Image style={styles.mediaItemImage} source={{ uri: imageUrl }} />
      </ThemedView>
    </Link>
  )
}

export default MediaItem

const styles = StyleSheet.create({
  mediaItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 0,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ecececff',
  },
  mediaItemImage: { height: 75, width: 75 },
  mediaItemLink: {
    marginVertical: 10,
  },
})
