import { StyleSheet } from 'react-native'
import ThemedText from './themedText'
import ThemedView from './themedView'

interface IInlineAlert {
  textContent: string
}

const InlineAlert = ({ textContent }: IInlineAlert) => {
  return (
    <ThemedView style={styles.mainContainer}>
      <ThemedText style={styles.alertText}>{textContent}</ThemedText>
    </ThemedView>
  )
}

export default InlineAlert

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 20,
  },
  alertText: {
    color: 'red',
  },
})
