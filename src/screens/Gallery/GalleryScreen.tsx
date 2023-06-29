import {StyleSheet, Text, SafeAreaView} from 'react-native';
import {TESTIDS, theme} from '../../utilities';

export default function GalleryScreen() {
  return (
    <SafeAreaView testID={TESTIDS.galleryContainer} style={styles.container}>
      <Text> Gallery Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey,
  },
});
