import ThemedText from '@/components/global/themedText'
import ThemedView from '@/components/global/themedView'
import { colors } from '@/constants/theme'

const Index = () => {
  return (
    <ThemedView
      lightColor={colors.light.background}
      darkColor={colors.dark.background}
    >
      <ThemedText lightColor={colors.light.text} darkColor={colors.dark.text}>
        Hello World!
      </ThemedText>
    </ThemedView>
  )
}

export default Index
