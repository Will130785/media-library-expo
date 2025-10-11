import { colors } from '@/constants/theme'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import ThemedButton from './themedButton'
import ThemedText from './themedText'

interface ISelectInputProps {
  buttonTitle: string
  options: { label: string; value: string }[]
  selectHandler: (option: string) => void
}

const SelectInput = ({
  buttonTitle,
  options,
  selectHandler,
}: ISelectInputProps) => {
  const [displayOptions, setDisplayOptions] = useState(false)

  const handleOptionSelect = (option: string) => {
    setDisplayOptions(false)
    selectHandler(option)
  }

  return (
    <>
      {displayOptions ? (
        options.map((option) => (
          <TouchableOpacity
            key={option.value}
            onPress={() => handleOptionSelect(option.value)}
          >
            <ThemedText>{option.label}</ThemedText>
          </TouchableOpacity>
        ))
      ) : (
        <ThemedButton
          title={buttonTitle}
          lightColor={colors.dark.background}
          darkColor={colors.light.background}
          onPress={() => setDisplayOptions(true)}
        />
      )}
    </>
  )
}

export default SelectInput
