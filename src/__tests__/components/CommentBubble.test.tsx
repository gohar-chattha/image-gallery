import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {CommentBubble} from '../../components/CommentBubble';
import {TESTIDS} from '../../utilities';

const onDelete = jest.fn();
const onEdit = jest.fn();
describe('CommentBubble', () => {
  it('renders the comment text', () => {
    const {getByText, getByTestId} = render(
      <CommentBubble
        testId={TESTIDS.commentBubble}
        comment={'Gohars test comment'}
        onDelete={onDelete}
        onEdit={onEdit}
      />,
    );
    const commentBubble = getByTestId(TESTIDS.commentBubble);
    const commentText = getByText('Gohars test comment');
    expect(commentBubble).toBeTruthy();
    expect(commentText).toBeTruthy();
  });

  it('calls the onDelete function when delete button is pressed', () => {
    const {getByTestId} = render(
      <CommentBubble
        testId={TESTIDS.commentBubble}
        comment={'Gohars test comment'}
        onDelete={onDelete}
        onEdit={onEdit}
      />,
    );
    const deleteButton = getByTestId(TESTIDS.commentDeleteButton);
    fireEvent.press(deleteButton);
    expect(onDelete).toHaveBeenCalledTimes(1);
  });
  it('calls the onEdit function when edit button is pressed', () => {
    const {getByTestId} = render(
      <CommentBubble
        testId={TESTIDS.commentBubble}
        comment={'Gohars test comment'}
        onDelete={onDelete}
        onEdit={onEdit}
      />,
    );
    const editButton = getByTestId(TESTIDS.commentEditButton);
    fireEvent.press(editButton);
    expect(onEdit).toHaveBeenCalledTimes(1);
  });
});
