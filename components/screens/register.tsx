import { colors } from '@/constants/theme'
import { useForm } from '@/hooks/useForm'
import { register } from '@/services/auth'
import { globalStyles } from '@/styles/globalStyles'
import { IRegisterPayload } from '@/types/auth'
import { Link, useRouter } from 'expo-router'
import { useState } from 'react'
import InlineAlert from '../global/inlineAlert'
import ThemedButton from '../global/themedButton'
import ThemedText from '../global/themedText'
import ThemedTextInput from '../global/themedTextInput'
import ThemedView from '../global/themedView'

const Register = () => {
  const router = useRouter()
  const [alertText, setAlertText] = useState<string | null>(null)
  const { handleChange, formValues } = useForm<IRegisterPayload>({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })
  const handleRegister = async () => {
    console.log(formValues)
    if (
      !formValues.firstname ||
      !formValues.lastname ||
      !formValues.email ||
      !formValues.password ||
      !formValues.passwordConfirm
    ) {
      setAlertText('All fields must be complete')
      setTimeout(() => {
        setAlertText(null)
      }, 4000)
      return
    }
    if (formValues.password !== formValues.passwordConfirm) {
      setAlertText('Passwords do not match')
      setTimeout(() => {
        setAlertText(null)
      }, 4000)
      return
    }
    const res = await register(formValues as unknown as IRegisterPayload)
    if (!res) {
      setAlertText('Error registering in, please try again')
      setTimeout(() => {
        setAlertText(null)
      }, 4000)
      return
    }
    if (!res.success) {
      setAlertText('Error registering in, please try again')
      setTimeout(() => {
        setAlertText(null)
      }, 4000)
      return
    }
    return router.replace('/(auth)/login')
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
        Register User
      </ThemedText>
      <ThemedTextInput
        placeholder="First Name"
        onChangeText={(e) => handleChange(e, 'firstname')}
      />
      <ThemedTextInput
        placeholder="Last Name"
        onChangeText={(e) => handleChange(e, 'lastname')}
      />
      <ThemedTextInput
        placeholder="Email"
        onChangeText={(e) => handleChange(e, 'email')}
      />
      <ThemedTextInput
        placeholder="Password"
        onChangeText={(e) => handleChange(e, 'password')}
        secureTextEntry
      />
      <ThemedTextInput
        placeholder="Confirm Password"
        onChangeText={(e) => handleChange(e, 'passwordConfirm')}
        secureTextEntry
      />
      <ThemedButton
        title="Register"
        onPress={handleRegister}
        lightColor={colors.dark.background}
        darkColor={colors.light.background}
      />
      <Link href="/login" replace>
        <ThemedText lightColor={colors.light.text} darkColor={colors.dark.text}>
          OR click here to login
        </ThemedText>
      </Link>
      {alertText && <InlineAlert textContent={alertText} />}
    </ThemedView>
  )
}

export default Register
