import ThemedButton from '@/components/global/themedButton'
import ThemedView from '@/components/global/themedView'
import { colors } from '@/constants/theme'
import { useRouter } from 'expo-router'
import TypeButtonContainer from './typeButtonContainer'

const Index = () => {
  const router = useRouter()

  return (
    <ThemedView>
      <TypeButtonContainer />
      <ThemedButton
        onPress={() => router.replace('/add-media-item')}
        title="Add Media"
        lightColor={colors.dark.background}
        darkColor={colors.light.background}
      />
    </ThemedView>
  )
}

export default Index
