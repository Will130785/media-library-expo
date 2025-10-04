import ThemedButton from '@/components/global/themedButton'
import ThemedScrollView from '@/components/global/themedScrollView'
import ThemedText from '@/components/global/themedText'
import ThemedTextInput from '@/components/global/themedTextInput'
import { colors } from '@/constants/theme'
import { useForm } from '@/hooks/useForm'
import { addMediaItem } from '@/services/media'
import { globalStyles } from '@/styles/globalStyles'
import { IMediaPayloadData } from '@/types/media'

const AddMediaItem = () => {
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
    console.log(formValues)
    if (
      !formValues.title ||
      !formValues.mediatype ||
      !formValues.releasedate ||
      !formValues.barcode
    ) {
      return
    }
    const res = await addMediaItem(formValues as unknown as IMediaPayloadData)
    console.log(res)
    if (!res) {
      return
    }
    console.log(res)
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
      <ThemedTextInput
        placeholder="Media Type"
        onChangeText={(e) => handleChange(e, 'mediatype')}
      />
      <ThemedTextInput
        placeholder="Release Date"
        onChangeText={(e) => handleChange(e, 'releasedate')}
      />
      <ThemedTextInput
        placeholder="Barcode"
        onChangeText={(e) => handleChange(e, 'barcode')}
      />
      <ThemedTextInput
        placeholder="Image URL"
        onChangeText={(e) => handleChange(e, 'imageurl')}
      />
      <ThemedTextInput
        placeholder="Artist"
        onChangeText={(e) => handleChange(e, 'artist')}
      />
      <ThemedTextInput
        placeholder="Director"
        onChangeText={(e) => handleChange(e, 'director')}
      />
      <ThemedTextInput
        placeholder="Record Label"
        onChangeText={(e) => handleChange(e, 'recordLabel')}
      />
      <ThemedTextInput
        placeholder="Film Studio"
        onChangeText={(e) => handleChange(e, 'filmStudio')}
      />
      <ThemedTextInput
        placeholder="Developer"
        onChangeText={(e) => handleChange(e, 'developer')}
      />
      <ThemedTextInput
        placeholder="Author"
        onChangeText={(e) => handleChange(e, 'author')}
      />
      <ThemedTextInput
        placeholder="Format"
        onChangeText={(e) => handleChange(e, 'format')}
      />
      <ThemedTextInput
        placeholder="Notes"
        onChangeText={(e) => handleChange(e, 'notes')}
      />
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
