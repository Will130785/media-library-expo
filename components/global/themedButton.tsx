import { useThemeColor } from '@/hooks/useThemeColor'
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import ThemedText from './themedText'

type ThemedButtonProps = TouchableOpacityProps & {
  title: string
  lightColor?: string
  darkColor?: string
}

const ThemedButton = ({
  style,
  title,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedButtonProps) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  )
  const color = useThemeColor({ light: darkColor, dark: lightColor }, 'text')
  return (
    <TouchableOpacity
      style={[styles.buttonBase, { backgroundColor }, style]}
      {...otherProps}
    >
      <ThemedText style={[styles.buttonText, { color }]}>{title}</ThemedText>
    </TouchableOpacity>
  )
}

export default ThemedButton

const styles = StyleSheet.create({
  buttonBase: {
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
})
