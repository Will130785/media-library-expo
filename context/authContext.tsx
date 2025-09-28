import { checkTokenIsValid } from '@/services/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SplashScreen, useRouter } from 'expo-router'
import { createContext, PropsWithChildren, useEffect, useState } from 'react'

SplashScreen.preventAutoHideAsync()

interface IAuthState {
  isLoggedIn: boolean
  isReady: boolean
  logIn: (token: string) => void
  logOut: () => void
}

export const authContext = createContext<IAuthState>({
  isLoggedIn: false,
  isReady: false,
  logIn: () => {},
  logOut: () => {},
})

const authStorageKey = 'auth-key'

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isReady, setIsReady] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  const storeAuthState = async (token: string) => {
    try {
      console.log('Storing auth state', token)
      const jsonValue = JSON.stringify({ token })
      console.log(jsonValue, 'jsonValue')
      await AsyncStorage.setItem(authStorageKey, jsonValue)
    } catch (err) {
      console.log('Error saving', err)
    }
  }

  const logIn = async (token: string) => {
    setIsLoggedIn(true)
    await storeAuthState(token)
    router.replace('/')
  }
  const logOut = () => {
    setIsLoggedIn(false)
    AsyncStorage.clear()
    router.replace('/login')
  }

  const getAuthFromStorage = async () => {
    try {
      const value = await AsyncStorage.getItem(authStorageKey)
      if (value) {
        const auth = JSON.parse(value)
        if (auth.token) {
          console.log(auth, 'auth from storage')
          const tokenValid = await checkTokenIsValid(auth.token)
          console.log(tokenValid, 'VALID')
          if (tokenValid && tokenValid.success) {
            setIsReady(true)
            return setIsLoggedIn(auth.isLoggedIn)
          }
          setIsReady(true)
          return logOut()
        }
        setIsReady(true)
        return logOut()
      } else {
        console.log('No auth found in storage')
        setIsReady(true)
        return router.replace('/login')
      }
    } catch (err) {
      console.log('Error getting auth from storage', err)
    }
    setIsReady(true)
  }

  useEffect(() => {
    getAuthFromStorage()
  }, [])

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync()
    }
  }, [isReady])

  return (
    <authContext.Provider value={{ isLoggedIn, isReady, logIn, logOut }}>
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider
