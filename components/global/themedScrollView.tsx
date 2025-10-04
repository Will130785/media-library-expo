import { ScrollView, type ScrollViewProps } from 'react-native'

import { useThemeColor } from '@/hooks/useThemeColor'

export type ThemedScrollViewProps = ScrollViewProps & {
  lightColor?: string
  darkColor?: string
}

const ThemedScrollView = ({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedScrollViewProps) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  )

  return (
    <ScrollView style={[{ backgroundColor, flex: 1 }, style]} {...otherProps} />
  )
}

export default ThemedScrollView
