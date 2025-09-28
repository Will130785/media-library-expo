import { colors } from '@/constants/theme'
import { useForm } from '@/hooks/useForm'
import { register } from '@/services/auth'
import { IRegisterPayload } from '@/types/auth'
import { Link } from 'expo-router'
import ThemedButton from '../global/themedButton'
import ThemedText from '../global/themedText'
import ThemedTextInput from '../global/themedTextInput'
import ThemedView from '../global/themedView'

const Register = () => {
  const { handleChange, formValues } = useForm<IRegisterPayload>({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })
  const handleRegister = async () => {
    console.log(formValues)
    const res = await register(formValues as unknown as IRegisterPayload)
    if (
      !formValues.firstname ||
      !formValues.lastname ||
      !formValues.email ||
      !formValues.password ||
      !formValues.passwordConfirm
    ) {
      return
    }
    if (!res) {
      return
    }
    console.log(res)
  }
  return (
    <ThemedView
      lightColor={colors.light.background}
      darkColor={colors.dark.background}
    >
      <ThemedText lightColor={colors.light.text} darkColor={colors.dark.text}>
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
      />
      <ThemedTextInput
        placeholder="Confirm Password"
        onChangeText={(e) => handleChange(e, 'passwordConfirm')}
      />
      <Link href="/login" replace>
        <ThemedText lightColor={colors.light.text} darkColor={colors.dark.text}>
          Click here to login
        </ThemedText>
      </Link>
      <ThemedButton title="Register" onPress={handleRegister} />
    </ThemedView>
  )
}

export default Register
