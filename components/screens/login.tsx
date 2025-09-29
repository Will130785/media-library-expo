import { colors } from '@/constants/theme'
import { authContext } from '@/context/authContext'
import { useForm } from '@/hooks/useForm'
import { login } from '@/services/auth'
import { ILoginPayload } from '@/types/auth'
import { Link } from 'expo-router'
import { use } from 'react'
import ThemedButton from '../global/themedButton'
import ThemedText from '../global/themedText'
import ThemedTextInput from '../global/themedTextInput'
import ThemedView from '../global/themedView'

const Login = () => {
  const authState = use(authContext)
  const { formValues, handleChange } = useForm<ILoginPayload>({
    email: '',
    password: '',
  })

  const handleLogin = async () => {
    if (!formValues.email || !formValues.password) {
      return
    }
    const res = await login(formValues)
    if (!res) {
      return
    }
    if (!res.token) {
      return
    }
    authState.logIn(res.token)
    return
  }

  return (
    <ThemedView
      lightColor={colors.light.background}
      darkColor={colors.dark.background}
    >
      <ThemedText lightColor={colors.light.text} darkColor={colors.dark.text}>
        Login
      </ThemedText>
      <ThemedTextInput
        placeholder="Email"
        onChangeText={(e) => handleChange(e, 'email')}
      />
      <ThemedTextInput
        placeholder="Password"
        onChangeText={(e) => handleChange(e, 'password')}
      />
      <ThemedButton title="Login" onPress={handleLogin} />
      <Link href="/register" replace>
        <ThemedText lightColor={colors.light.text} darkColor={colors.dark.text}>
          Click here to register
        </ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Login
