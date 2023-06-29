import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {widthPixel as WP} from '../utilities';

interface ImageTileProps {
  url: string;
  testId?: string;
}

export const ImageTile = (props: ImageTileProps) => {
  return (
    <TouchableOpacity testID={props.testId} style={styles.imageContainer}>
      <Image style={styles.thumbnailImage} source={{uri: props.url}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  thumbnailImage: {
    marginVertical: WP(5),
    marginLeft: WP(2.5),
    width: WP(40),
    height: WP(70),
    borderRadius: 20,
  },
});
