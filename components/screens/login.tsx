import { colors } from '@/constants/theme'
import { Link } from 'expo-router'
import ThemedText from '../global/themedText'
import ThemedTextInput from '../global/themedTextInput'
import ThemedView from '../global/themedView'

const Login = () => {
  return (
    <ThemedView
      lightColor={colors.light.background}
      darkColor={colors.dark.background}
    >
      <ThemedText lightColor={colors.light.text} darkColor={colors.dark.text}>
        Login
      </ThemedText>
      <ThemedTextInput placeholder="Email" />
      <ThemedTextInput placeholder="Password" />
      <Link href="/register" replace>
        <ThemedText lightColor={colors.light.text} darkColor={colors.dark.text}>
          Click here to register
        </ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Login
