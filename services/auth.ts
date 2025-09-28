import { ILoginPayload, IRegisterPayload } from '@/types/auth'
const { EXPO_PUBLIC_API_URL } = process.env

export const register = async (payload: IRegisterPayload) => {
  try {
    const res = await fetch(`${EXPO_PUBLIC_API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    if (!res.ok) {
      throw new Error('Error registering user')
    }
    const parsedRes = await res.json()
    return parsedRes
  } catch {
    return null
  }
}

export const login = async (payload: ILoginPayload) => {
  try {
    const res = await fetch(`${EXPO_PUBLIC_API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    if (!res.ok) {
      throw new Error('Error logging in user')
    }
    const parsedRes = await res.json()
    return parsedRes
  } catch {
    return null
  }
}

export const checkTokenIsValid = async (token: string) => {
  try {
    const res = await fetch(`${EXPO_PUBLIC_API_URL}/check-token-is-valid`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (!res.ok) {
      throw new Error('Error validating token')
    }
    const parsedRes = await res.json()
    return parsedRes
  } catch {
    return null
  }
}
