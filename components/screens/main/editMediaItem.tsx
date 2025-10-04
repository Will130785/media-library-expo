import ThemedButton from '@/components/global/themedButton'
import ThemedScrollView from '@/components/global/themedScrollView'
import ThemedText from '@/components/global/themedText'
import ThemedTextInput from '@/components/global/themedTextInput'
import { colors } from '@/constants/theme'
import { useForm } from '@/hooks/useForm'
import { editMediaItem, getMediaItem } from '@/services/media'
import { globalStyles } from '@/styles/globalStyles'
import { IMediaPayloadData } from '@/types/media'
import { useLocalSearchParams } from 'expo-router'
import { useEffect } from 'react'

const EditMediaItem = () => {
  const { id } = useLocalSearchParams()
  const { handleChange, formValues, setFormValues } =
    useForm<IMediaPayloadData>({
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
  const handleEditMediaItem = async () => {
    console.log(formValues, 'VALUES')
    if (
      !formValues.title ||
      !formValues.mediatype ||
      !formValues.releasedate ||
      !formValues.barcode
    ) {
      return
    }
    const res = await editMediaItem(
      id as string,
      formValues as unknown as IMediaPayloadData
    )
    console.log(res)
    if (!res) {
      return
    }
    console.log(res)
  }

  const handleGetMediaItem = async () => {
    const res = await getMediaItem(id as string)
    if (!res) {
      return
    }
    console.log(res.mediaItem, '***')
    setFormValues(res.mediaItem)
  }

  useEffect(() => {
    handleGetMediaItem()
  }, [])

  useEffect(() => {
    console.log(formValues, 'FORM VAU')
  }, [formValues])

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
        Edit Item
      </ThemedText>
      <ThemedTextInput
        placeholder="Title"
        onChangeText={(e) => handleChange(e, 'title')}
        value={formValues.title}
      />
      <ThemedTextInput
        placeholder="Media Type"
        onChangeText={(e) => handleChange(e, 'mediatype')}
        value={formValues.mediatype}
      />
      <ThemedTextInput
        placeholder="Release Date"
        onChangeText={(e) => handleChange(e, 'releasedate')}
        value={formValues.releasedate}
      />
      <ThemedTextInput
        placeholder="Barcode"
        onChangeText={(e) => handleChange(e, 'barcode')}
        value={formValues.barcode}
      />
      <ThemedTextInput
        placeholder="Artist"
        onChangeText={(e) => handleChange(e, 'artist')}
        value={formValues.artist}
      />
      <ThemedTextInput
        placeholder="Director"
        onChangeText={(e) => handleChange(e, 'director')}
        value={formValues.director}
      />
      <ThemedTextInput
        placeholder="Record Label"
        onChangeText={(e) => handleChange(e, 'recordLabel')}
        value={formValues.recordLabel}
      />
      <ThemedTextInput
        placeholder="Film Studio"
        onChangeText={(e) => handleChange(e, 'filmStudio')}
        value={formValues.filmStudio}
      />
      <ThemedTextInput
        placeholder="Developer"
        onChangeText={(e) => handleChange(e, 'developer')}
        value={formValues.developer}
      />
      <ThemedTextInput
        placeholder="Author"
        onChangeText={(e) => handleChange(e, 'author')}
        value={formValues.author}
      />
      <ThemedTextInput
        placeholder="Format"
        onChangeText={(e) => handleChange(e, 'format')}
        value={formValues.format}
      />
      <ThemedTextInput
        placeholder="Image URL"
        onChangeText={(e) => handleChange(e, 'imageurl')}
        value={formValues.imageurl}
      />
      <ThemedTextInput
        placeholder="Notes"
        onChangeText={(e) => handleChange(e, 'notes')}
        value={formValues.notes}
      />
      <ThemedButton
        title="Edit Media Item"
        onPress={handleEditMediaItem}
        lightColor={colors.dark.background}
        darkColor={colors.light.background}
      />
    </ThemedScrollView>
  )
}

export default EditMediaItem
