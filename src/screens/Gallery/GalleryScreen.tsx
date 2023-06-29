import {StyleSheet, Text, SafeAreaView} from 'react-native';
import useImages from '../../hooks/useImages';
import {TESTIDS, theme} from '../../utilities';

const GalleryScreen: React.FC = () => {
  // using react query hook to retrieve data from API via Axios api layer
  const {data, isLoading, isSuccess, isError} = useImages();
  console.log('Images from API', data);
  return (
    <SafeAreaView testID={TESTIDS.galleryContainer} style={styles.container}>
      <Text>Gallery Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey,
  },
});

export default GalleryScreen;
