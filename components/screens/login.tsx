import { colors } from '@/constants/theme'
import { authContext } from '@/context/authContext'
import { useForm } from '@/hooks/useForm'
import { login } from '@/services/auth'
import { globalStyles } from '@/styles/globalStyles'
import { ILoginPayload } from '@/types/auth'
import { Link } from 'expo-router'
import { use, useState } from 'react'
import { StyleSheet } from 'react-native'
import InlineAlert from '../global/inlineAlert'
import ThemedButton from '../global/themedButton'
import ThemedText from '../global/themedText'
import ThemedTextInput from '../global/themedTextInput'
import ThemedView from '../global/themedView'

const Login = () => {
  const [alertText, setAlertText] = useState<string | null>(null)
  const authState = use(authContext)
  const { formValues, handleChange } = useForm<ILoginPayload>({
    email: '',
    password: '',
  })

  const handleLogin = async () => {
    if (!formValues.email || !formValues.password) {
      setAlertText('All fields must be complete')
      setTimeout(() => {
        setAlertText(null)
      }, 4000)
      return
    }
    const res = await login(formValues)
    if (!res) {
      setAlertText('Error logging in, please try again')
      setTimeout(() => {
        setAlertText(null)
      }, 4000)
      return
    }
    if (!res.token) {
      setAlertText('Error logging in, please try again')
      setTimeout(() => {
        setAlertText(null)
      }, 4000)
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
      <ThemedText
        style={globalStyles.h1}
        lightColor={colors.light.text}
        darkColor={colors.dark.text}
      >
        Login
      </ThemedText>
      <ThemedTextInput
        placeholder="Email"
        onChangeText={(e) => handleChange(e, 'email')}
      />
      <ThemedTextInput
        placeholder="Password"
        onChangeText={(e) => handleChange(e, 'password')}
        secureTextEntry
      />
      <ThemedButton
        title="Login"
        onPress={handleLogin}
        lightColor={colors.dark.background}
        darkColor={colors.light.background}
      />
      <Link href="/register" replace style={styles.linkText}>
        <ThemedText lightColor={colors.light.text} darkColor={colors.dark.text}>
          Or click here to register
        </ThemedText>
      </Link>
      {alertText && <InlineAlert textContent={alertText} />}
    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({
  linkText: {
    marginTop: 20,
  },
})
