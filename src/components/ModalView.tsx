import React from 'react';
import {StyleSheet, Modal, TouchableOpacity, View, Image} from 'react-native';
import {widthPixel as WP, heightPixel as HP, theme} from '../utilities';

type ModalViewProps = {
  visible: boolean;
  imageUri: string | null;
  closeModal: () => void;
  testId?: string;
};

export const ModalView = (props: ModalViewProps) => {
  return (
    <Modal testID={props.testId} visible={props.visible} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={props.closeModal}>
            <Image
              style={styles.closeIcon}
              source={require('../assets/close.png')}
            />
          </TouchableOpacity>
          {props.imageUri && (
            <Image style={styles.modalImage} source={{uri: props.imageUri}} />
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: theme.colors.grey,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: HP(90),
  },
  modalImage: {
    width: WP(80),
    height: HP(50),
    resizeMode: 'contain',
    marginVertical: 10,
  },
  closeIcon: {
    height: WP(10),
    width: WP(10),
    alignSelf: 'flex-end',
  },
});

export default ModalView;
