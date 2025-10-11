import SelectInput from '@/components/global/selectInput'
import ThemedButton from '@/components/global/themedButton'
import ThemedScrollView from '@/components/global/themedScrollView'
import ThemedText from '@/components/global/themedText'
import ThemedTextInput from '@/components/global/themedTextInput'
import { colors } from '@/constants/theme'
import { useForm } from '@/hooks/useForm'
import { addMediaItem } from '@/services/media'
import { globalStyles } from '@/styles/globalStyles'
import { IMediaPayloadData } from '@/types/media'
import { useRouter } from 'expo-router'
import { useState } from 'react'

const mediaTypeOptions = [
  { label: 'Music', value: 'music' },
  { label: 'Film', value: 'film' },
  { label: 'Games', value: 'games' },
  { label: 'Books', value: 'books' },
  { label: 'TV', value: 'tv' },
]

const AddMediaItem = () => {
  const router = useRouter()
  const [selectedMediaType, setSelectedMediaType] = useState<string | null>(
    null
  )
  const { handleChange, formValues } = useForm<IMediaPayloadData>({
    title: '',
    mediatype: '',
    releasedate: '',
    barcode: '',
    imageurl: '',
    artist: '',
    director: '',
    recordLabel: '',
    filmStudio: '',
    developer: '',
    author: '',
    format: '',
    notes: '',
  })
  const handleAddMediaItem = async () => {
    if (
      !formValues.title ||
      !formValues.mediatype ||
      !formValues.releasedate ||
      !formValues.barcode
    ) {
      return
    }
    const res = await addMediaItem(formValues as unknown as IMediaPayloadData)
    if (!res) {
      return
    }
    return router.replace('/')
  }
  return (
    <ThemedScrollView
      lightColor={colors.light.background}
      darkColor={colors.dark.background}
    >
      <ThemedText
        style={globalStyles.h1}
        lightColor={colors.light.text}
        darkColor={colors.dark.text}
      >
        Add Media Item
      </ThemedText>
      <ThemedTextInput
        placeholder="Title"
        onChangeText={(e) => handleChange(e, 'title')}
      />
      <SelectInput
        buttonTitle={selectedMediaType?.toUpperCase() ?? 'Select Media Type'}
        options={mediaTypeOptions}
        selectHandler={(e) => {
          setSelectedMediaType(e)
          handleChange(e, 'mediatype')
        }}
      />
      {selectedMediaType && (
        <>
          <ThemedTextInput
            placeholder="Year of Release"
            onChangeText={(e) => handleChange(e, 'releasedate')}
            maxLength={4}
          />
          <ThemedTextInput
            placeholder="Barcode"
            onChangeText={(e) => handleChange(e, 'barcode')}
          />
          <ThemedTextInput
            placeholder="Image URL"
            onChangeText={(e) => handleChange(e, 'imageurl')}
          />
          {selectedMediaType === 'music' && (
            <ThemedTextInput
              placeholder="Artist"
              onChangeText={(e) => handleChange(e, 'artist')}
            />
          )}
          {selectedMediaType === 'film' && (
            <ThemedTextInput
              placeholder="Director"
              onChangeText={(e) => handleChange(e, 'director')}
            />
          )}
          {selectedMediaType === 'music' && (
            <ThemedTextInput
              placeholder="Record Label"
              onChangeText={(e) => handleChange(e, 'recordLabel')}
            />
          )}
          {selectedMediaType === 'film' && (
            <ThemedTextInput
              placeholder="Film Studio"
              onChangeText={(e) => handleChange(e, 'filmStudio')}
            />
          )}
          {selectedMediaType === 'games' && (
            <ThemedTextInput
              placeholder="Developer"
              onChangeText={(e) => handleChange(e, 'developer')}
            />
          )}
          {selectedMediaType === 'books' && (
            <ThemedTextInput
              placeholder="Author"
              onChangeText={(e) => handleChange(e, 'author')}
            />
          )}
          <ThemedTextInput
            placeholder="Format"
            onChangeText={(e) => handleChange(e, 'format')}
          />
          <ThemedTextInput
            placeholder="Notes"
            onChangeText={(e) => handleChange(e, 'notes')}
          />
        </>
      )}
      <ThemedButton
        title="Add Media Item"
        onPress={handleAddMediaItem}
        lightColor={colors.dark.background}
        darkColor={colors.light.background}
      />
    </ThemedScrollView>
  )
}

export default AddMediaItem
