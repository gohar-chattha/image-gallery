import React from 'react';
import {TouchableOpacity, Image, StyleSheet, Text, View} from 'react-native';
import {TESTIDS, theme, widthPixel as WP} from '../utilities';

type CommentBubbleProps = {
  comment: string;
  onDelete: () => void;
  onEdit: () => void;
  testId?: string;
};

export const CommentBubble = (props: CommentBubbleProps) => {
  return (
    <View testID={props.testId} style={styles.commentContainer}>
      <Text style={styles.commentText}>{props.comment}</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          testID={TESTIDS.commentEditButton}
          onPress={props.onEdit}
          style={styles.iconButton}>
          <Image source={theme.images.edit} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          testID={TESTIDS.commentDeleteButton}
          onPress={props.onDelete}
          style={styles.iconButton}>
          <Image source={theme.images.delete} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    backgroundColor: theme.colors.blue,
    borderRadius: 10,
    width: WP(80),
    padding: 10,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  commentText: {
    maxWidth: WP(60),
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 10,
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
});
