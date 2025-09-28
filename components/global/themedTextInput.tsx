import { useThemeColor } from '@/hooks/useThemeColor'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'

export type ThemedTextInputProps = TextInputProps & {
  darkColor?: string
  lightColor?: string
}

const ThemedTextInput = ({
  style,
  darkColor,
  lightColor,
  ...otherProps
}: ThemedTextInputProps) => {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')
  return (
    <TextInput style={[styles.inputBase, { color }, style]} {...otherProps} />
  )
}

export default ThemedTextInput

const styles = StyleSheet.create({
  inputBase: {
    padding: 20,
  },
})
