import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
import {TESTIDS, theme, widthPixel as WP} from '../utilities';

export interface CommentInputProps {
  value: string;
  onChangeText: Dispatch<SetStateAction<string>>;
  onSend: () => void;
  placeholder?: string;
  testID?: string;
}

export const CommentInput = (props: CommentInputProps) => {
  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          testID={props.testID}
          style={styles.input}
          placeholder={props.placeholder ? props.placeholder : 'Enter input'}
          value={props.value}
          onChangeText={props.onChangeText}
        />
        <TouchableOpacity
          testID={TESTIDS.commentSendButton}
          onPress={props.onSend}>
          <Image source={theme.images.send} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    width: WP(80),
    padding: Platform.OS === 'android' ? 0 : 10,
    paddingHorizontal: Platform.OS === 'android' ? 10 : 0,
    borderRadius: 8,
    marginTop: 10,
  },
  input: {
    flex: 1,
  },
  iconButton: {
    padding: 8,
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
});
