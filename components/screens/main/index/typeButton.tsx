import ThemedText from '@/components/global/themedText'
import ThemedView from '@/components/global/themedView'
import { useRouter } from 'expo-router'
import { StyleSheet, TouchableOpacity } from 'react-native'

interface ITypeButtonProps {
  title: string
  mediaType: string
}

const TypeButton = ({ title, mediaType }: ITypeButtonProps) => {
  const router = useRouter()
  return (
    <TouchableOpacity
      onPress={() =>
        router.replace({
          pathname: '/(main)/all-media/[mediaType]',
          params: { mediaType },
        })
      }
    >
      <ThemedView style={styles.buttonContainer}>
        <ThemedText>{title}</ThemedText>
      </ThemedView>
    </TouchableOpacity>
  )
}

export default TypeButton

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 0,
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },
})
