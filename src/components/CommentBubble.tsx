import React from 'react';
import {TouchableOpacity, Image, StyleSheet, Text, View} from 'react-native';
import {theme, widthPixel as WP} from '../utilities';

type CommentBubbleProps = {
  comment: string;
  onDelete: () => void;
  onEdit: () => void;
  testId?: string;
};

export const CommentBubble = (props: CommentBubbleProps) => {
  return (
    <View style={styles.commentContainer}>
      <Text style={styles.commentText}>{props.comment}</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={props.onEdit} style={styles.iconButton}>
          <Image source={require('../assets/edit.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onDelete} style={styles.iconButton}>
          <Image source={require('../assets/delete.png')} style={styles.icon} />
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
