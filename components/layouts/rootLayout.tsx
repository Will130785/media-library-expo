import { colors } from '@/constants/theme'
import AuthProvider from '@/context/authContext'
import { useColorScheme } from '@/hooks/useColorScheme'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { Stack } from 'expo-router'
import 'react-native-reanimated'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const RootLayout = () => {
  const colorScheme = useColorScheme()
  return (
    <AuthProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <SafeAreaProvider>
          <SafeAreaView
            style={{
              flex: 1,
              backgroundColor:
                colorScheme === 'dark'
                  ? colors.dark.background
                  : colors.light.background,
            }}
            edges={['top', 'bottom', 'left', 'right']}
          >
            <Stack screenOptions={{ headerShown: false, animation: 'none' }} />
          </SafeAreaView>
        </SafeAreaProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default RootLayout
