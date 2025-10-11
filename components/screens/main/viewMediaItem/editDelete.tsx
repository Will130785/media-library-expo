import ThemedView from '@/components/global/themedView'
import Entypo from '@expo/vector-icons/Entypo'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Link } from 'expo-router'
import { StyleSheet, TouchableOpacity } from 'react-native'

interface IEditDeleteProps {
  id: string
  handleDeleteMediaItem: () => void
}

const EditDelete = ({ id, handleDeleteMediaItem }: IEditDeleteProps) => {
  return (
    <ThemedView style={styles.editDeleteContainer}>
      <Link
        href={{
          pathname: '/(main)/edit-media-item/[id]',
          params: { id: id as string },
        }}
      >
        <Entypo name="edit" size={16} color="black" />
      </Link>
      <TouchableOpacity onPress={handleDeleteMediaItem}>
        <MaterialIcons name="delete" size={16} color="black" />
      </TouchableOpacity>
    </ThemedView>
  )
}

export default EditDelete

const styles = StyleSheet.create({
  editDeleteContainer: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: 'auto',
  },
})
