import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../index';

export interface IncomingCommentsFormat {
  url: string;
  comment: string;
}

export interface StoreCommentsFormat {
  url: string;
  comments: string[];
}

interface UpdateCommentFormat {
  url: string;
  actionToDo: string;
  commentId: number;
  newComment: string;
}

const initialState: StoreCommentsFormat[] = [];
export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<IncomingCommentsFormat>) => {
      const {url, comment} = action.payload;
      const existingComments = state.find(item => item.url === url);
      if (existingComments) {
        existingComments.comments.push(comment);
      } else {
        state.push({url, comments: [comment]});
      }
    },
    updateComment: (state, action: PayloadAction<UpdateCommentFormat>) => {
      const {url, commentId, actionToDo, newComment} = action.payload;
      const existingComments = state.find(item => item.url === url);
      if (existingComments) {
        switch (actionToDo) {
          case 'Update': {
            existingComments.comments.splice(commentId, 1, newComment);
            break;
          }
          case 'Delete': {
            existingComments.comments.splice(commentId, 1);
            break;
          }
        }
      }
    },
  },
});
export const {addComment, updateComment} = commentsSlice.actions;
export const commentsSelector = (state: RootState) => state.comments;
export default commentsSlice.reducer;
