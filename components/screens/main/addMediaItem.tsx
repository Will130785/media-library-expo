import ThemedButton from '@/components/global/themedButton'
import ThemedText from '@/components/global/themedText'
import ThemedTextInput from '@/components/global/themedTextInput'
import ThemedView from '@/components/global/themedView'
import { colors } from '@/constants/theme'
import { useForm } from '@/hooks/useForm'
import { addMediaItem } from '@/services/media'
import { IMediaPayloadData } from '@/types/media'

const AddMediaItem = () => {
  const { handleChange, formValues } = useForm<IMediaPayloadData>({
    title: '',
    mediatype: '',
    releasedate: '',
    barcode: '',
    imageurl: '',
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
    if (!res) {
      return
    }
    console.log(res)
  }
  return (
    <ThemedView
      lightColor={colors.light.background}
      darkColor={colors.dark.background}
    >
      <ThemedText lightColor={colors.light.text} darkColor={colors.dark.text}>
        Register User
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
        placeholder="Notes"
        onChangeText={(e) => handleChange(e, 'notes')}
      />
      <ThemedButton title="Add Media Item" onPress={handleAddMediaItem} />
    </ThemedView>
  )
}

export default AddMediaItem
