import React, {useCallback, useMemo} from 'react';
import {
  StyleSheet,
  Modal,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  ListRenderItem,
  Alert,
  Text,
} from 'react-native';
import {
  widthPixel as WP,
  heightPixel as HP,
  theme,
  TESTIDS,
} from '../utilities';
import {useSelector} from 'react-redux';
import {commentsSelector} from '../store';
import {CommentBubble} from './CommentBubble';
import {CommentInput} from './CommentInput';
import {useDispatch} from 'react-redux';
import {addComment, updateComment} from '../store';

export type ModalViewProps = {
  visible: boolean;
  imageUrl: string | null;
  closeModal: () => void;
  testId?: string;
};

export enum CommentActions {
  update = 'Update',
  delete = 'Delete',
}

export const ModalView = (props: ModalViewProps) => {
  const allComments = useSelector(commentsSelector);
  const dispatch = useDispatch();
  const specificComments = allComments.find(
    comment => comment.url === props.imageUrl,
  )?.comments;
  const memoizedComments = useMemo(() => specificComments, [specificComments]);
  const [comment, setComment] = React.useState('');
  const [editingCommentId, setEditingCommentId] = React.useState(-1);
  const keyExtractor = useCallback((item: string) => item, []);
  const renderItem = useCallback<ListRenderItem<string>>(
    ({item, index}) => {
      return (
        <CommentBubble
          onDelete={() => {
            if (props.imageUrl) {
              dispatch(
                updateComment({
                  url: props.imageUrl,
                  commentId: index,
                  actionToDo: CommentActions.delete,
                  newComment: '',
                }),
              );
            }
          }}
          onEdit={() => {
            setEditingCommentId(index);
            setComment(item);
          }}
          comment={item}
          testId={TESTIDS.commentBubble}
        />
      );
    },
    [memoizedComments],
  );
  const handleCommentSend = () => {
    if (comment.trim() !== '' && props.imageUrl) {
      const newComment = comment.trim();
      switch (editingCommentId !== -1) {
        case true: {
          dispatch(
            updateComment({
              url: props.imageUrl,
              commentId: editingCommentId,
              newComment,
              actionToDo: CommentActions.update,
            }),
          );
          break;
        }
        case false: {
          dispatch(addComment({url: props.imageUrl, comment: newComment}));
          break;
        }
      }
      setComment('');
      setEditingCommentId(-1);
    } else {
      Alert.alert('', 'Please enter a comment first');
    }
  };

  return (
    <Modal testID={props.testId} visible={props.visible} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={props.closeModal}>
            <Image
              testID={TESTIDS.modalCloseButton}
              style={styles.closeIcon}
              source={theme.images.close}
            />
          </TouchableOpacity>
          {props.imageUrl && (
            <Image style={styles.modalImage} source={{uri: props.imageUrl}} />
          )}
          {(!memoizedComments || memoizedComments.length === 0) && (
            <Text style={styles.errorMessage}>No Comments yet !</Text>
          )}
          <FlatList
            data={memoizedComments}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            style={styles.flatListContainer}
          />
          <CommentInput
            value={comment}
            onChangeText={setComment}
            onSend={handleCommentSend}
            placeholder="Enter comment"
            testID={TESTIDS.commentInput}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: theme.colors.transparent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: theme.colors.grey,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: HP(85),
  },
  modalImage: {
    width: WP(80),
    height: HP(50),
    resizeMode: 'cover',
    marginVertical: 10,
    borderRadius: 10,
  },
  closeIcon: {
    height: 30,
    width: 30,
    alignSelf: 'flex-end',
  },
  flatListContainer: {
    maxHeight: HP(20),
  },
  errorMessage: {
    textAlign: 'center',
    fontSize: theme.font.sizes.p,
  },
});

export default ModalView;
