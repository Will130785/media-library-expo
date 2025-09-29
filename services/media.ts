import { IMediaPayloadData } from '@/types/media'
import AsyncStorage from '@react-native-async-storage/async-storage'
const { EXPO_PUBLIC_API_URL } = process.env

export const getMediaItem = async (id: string) => {
  const token = await AsyncStorage.getItem('token')
  if (!token) {
    return null
  }
  const response = await fetch(`${EXPO_PUBLIC_API_URL}/get-media-item/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if (!response.ok) {
    throw new Error('Error fetching media item')
  }
  const parsedResponse = await response.json()
  return parsedResponse
}

export const getAllMediaItems = async () => {
  const token = await AsyncStorage.getItem('token')
  if (!token) {
    return null
  }
  const response = await fetch(`${EXPO_PUBLIC_API_URL}/get-all-media-items`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if (!response.ok) {
    throw new Error('Error fetching all media items')
  }
  const parsedResponse = await response.json()
  return parsedResponse
}

export const addMediaItem = async (mediaDataPayload: IMediaPayloadData) => {
  const token = await AsyncStorage.getItem('token')
  if (!token) {
    return null
  }
  const response = await fetch(`${EXPO_PUBLIC_API_URL}/add-media-item`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(mediaDataPayload),
  })
  if (!response.ok) {
    throw new Error('Error adding media item')
  }
  const parsedResponse = await response.json()
  return parsedResponse
}

export const editMediaItem = async (
  id: string,
  mediaDataPayload: IMediaPayloadData
) => {
  const token = await AsyncStorage.getItem('token')
  if (!token) {
    return null
  }
  const response = await fetch(`${EXPO_PUBLIC_API_URL}/edit-media-item/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(mediaDataPayload),
  })
  if (!response.ok) {
    throw new Error('Error editing media item')
  }
  const parsedResponse = await response.json()
  return parsedResponse
}

export const deleteMediaItem = async (id: string) => {
  const token = await AsyncStorage.getItem('token')
  if (!token) {
    return null
  }
  const response = await fetch(
    `${EXPO_PUBLIC_API_URL}/delete-media-item/${id}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  if (!response.ok) {
    throw new Error('Error deleting media item')
  }
  const parsedResponse = await response.json()
  return parsedResponse
}
