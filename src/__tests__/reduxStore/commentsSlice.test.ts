import {
  addComment,
  updateComment,
  commentsSelector,
  commentsSlice,
  StoreCommentsFormat,
} from '../../store';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('commentsSlice', () => {
  it('should handle addComment', () => {
    const initialState: StoreCommentsFormat[] = [];
    const commentToAdd = {
      url: 'mocked-image-url.jpg',
      comment: 'Test comment',
    };
    const commentsReducer = commentsSlice.reducer;
    const nextState = commentsReducer(initialState, addComment(commentToAdd));
    const comments = commentsSelector({comments: nextState});
    expect(comments).toHaveLength(1);
    expect(comments[0].url).toBe('mocked-image-url.jpg');
    expect(comments[0].comments).toEqual(['Test comment']);
  });

  it('should handle updateComment for Update action', () => {
    const initialState = [
      {
        url: 'mocked-image-url.jpg',
        comments: ['Comment 1', 'Comment 2', 'Comment 3'],
      },
    ];
    const updatePayload = {
      url: 'mocked-image-url.jpg',
      commentId: 1,
      actionToDo: 'Update',
      newComment: 'Updated comment',
    };
    const commentsReducer = commentsSlice.reducer;
    const nextState = commentsReducer(
      initialState,
      updateComment(updatePayload),
    );
    const comments = commentsSelector({comments: nextState});

    expect(comments).toHaveLength(1);
    expect(comments[0].url).toBe('mocked-image-url.jpg');
    expect(comments[0].comments).toEqual([
      'Comment 1',
      'Updated comment',
      'Comment 3',
    ]);
  });

  it('should handle updateComment for Delete action', () => {
    const initialState = [
      {
        url: 'mocked-image-url.jpg',
        comments: ['Comment 1', 'Comment 2', 'Comment 3'],
      },
    ];
    const deletePayload = {
      url: 'mocked-image-url.jpg',
      commentId: 1,
      actionToDo: 'Delete',
      newComment: '',
    };
    const commentsReducer = commentsSlice.reducer;
    const nextState = commentsReducer(
      initialState,
      updateComment(deletePayload),
    );
    const comments = commentsSelector({comments: nextState});

    expect(comments).toHaveLength(1);
    expect(comments[0].url).toBe('mocked-image-url.jpg');
    expect(comments[0].comments).toEqual(['Comment 1', 'Comment 3']);
  });
});
