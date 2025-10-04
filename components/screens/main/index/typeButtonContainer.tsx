import ThemedScrollView from '@/components/global/themedScrollView'
import ThemedText from '@/components/global/themedText'
import ThemedView from '@/components/global/themedView'
import { globalStyles } from '@/styles/globalStyles'
import { StyleSheet } from 'react-native'
import TypeButton from './typeButton'

const TypeButtonContainer = () => {
  return (
    <ThemedView style={styles.typeButtonMainContainer}>
      <ThemedText style={globalStyles.h1}>Explore Media</ThemedText>
      <ThemedScrollView
        contentContainerStyle={styles.typeButtonScrollContainer}
        horizontal
      >
        <TypeButton title="Music" mediaType="music" />
        <TypeButton title="Film" mediaType="film" />
        <TypeButton title="Games" mediaType="game" />
        <TypeButton title="Books" mediaType="book" />
        <TypeButton title="TV" mediaType="tv" />
      </ThemedScrollView>
    </ThemedView>
  )
}

export default TypeButtonContainer

const styles = StyleSheet.create({
  typeButtonMainContainer: {
    marginVertical: 40,
  },
  typeButtonScrollContainer: {
    marginVertical: 20,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
    overflowY: 'hidden',
  },
})
