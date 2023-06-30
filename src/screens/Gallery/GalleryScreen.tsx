import {useCallback, useMemo, useState} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ListRenderItem,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {ImageTile} from '../../components/ImageTile';
import {ModalView} from '../../components/ModalView';
import useImages from '../../hooks/useImages';
import {
  TESTIDS,
  theme,
  widthPixel as WP,
  heightPixel as HP,
} from '../../utilities';

export default function GalleryScreen() {
  // using react query hook to retrieve data from API via Axios api layer
  const {data, isLoading, isSuccess, isError} = useImages();
  //Memoizing data to improve performance and avoid re-renders
  const memoizedData = useMemo(() => data?.message, [data]);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const keyExtractor = useCallback((item: string) => item, []);
  const renderItem = useCallback<ListRenderItem<string>>(
    ({item}) => {
      return (
        <ImageTile
          onPress={() => setSelectedImage(item)}
          testId={TESTIDS.imageTile}
          url={item}
        />
      );
    },
    [data],
  );
  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);
  return (
    <SafeAreaView testID={TESTIDS.galleryContainer} style={styles.container}>
      {(isLoading || !data) && <ActivityIndicator />}
      {isError && (
        <Text style={styles.errorMessage}>
          Cannot fetch images.{'\n'}Please try again later.
        </Text>
      )}
      <ModalView
        visible={!!selectedImage}
        imageUrl={selectedImage}
        closeModal={closeModal}
        testId={TESTIDS.modalContainer}
      />
      {isSuccess && (
        <>
          <Text testID={TESTIDS.galleryTitle} style={styles.title}>
            Dog Gallery
          </Text>
          <FlatList
            data={memoizedData}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            contentContainerStyle={styles.flatListContainer}
          />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: theme.font.sizes.h1,
    fontWeight: '300',
  },
  errorMessage: {
    textAlign: 'center',
    fontSize: theme.font.sizes.p,
  },
  flatListContainer: {
    paddingHorizontal: WP(5),
    paddingVertical: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  modalImage: {
    width: WP(80),
    height: HP(70),
    resizeMode: 'contain',
  },
});
