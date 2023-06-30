import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {
  ModalView,
  ModalViewProps,
  CommentActions,
} from '../../components/ModalView';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {RootState, updateComment} from '../../store';
import {TESTIDS} from '../../utilities';

describe('ModalView', () => {
  const mockProps: ModalViewProps = {
    visible: true,
    imageUrl: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg',
    closeModal: jest.fn(),
    testId: TESTIDS.modalContainer,
  };

  const mockStore = configureStore([]);
  const initialState: RootState = {
    comments: [
      {
        url: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg',
        comments: ['Comment 1', 'Comment 2', 'Comment 3'],
      },
    ],
  };
  const store = mockStore(initialState);

  it('renders correctly', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <ModalView {...mockProps} />
      </Provider>,
    );
    const modal = getByTestId(TESTIDS.modalContainer);
    expect(modal).toBeDefined();
  });

  it('calls closeModal callback when the close button is pressed', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <ModalView {...mockProps} />
      </Provider>,
    );
    const closeButton = getByTestId(TESTIDS.modalCloseButton);
    fireEvent.press(closeButton);
    expect(mockProps.closeModal).toHaveBeenCalledTimes(1);
  });

  it('calls dispatch with correct arguments when delete button is pressed', () => {
    const {getAllByTestId} = render(
      <Provider store={store}>
        <ModalView {...mockProps} />
      </Provider>,
    );
    const deleteButton = getAllByTestId(TESTIDS.commentDeleteButton)[0];
    fireEvent.press(deleteButton);
    expect(store.getActions()).toContainEqual(
      updateComment({
        url: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg',
        commentId: 0,
        actionToDo: CommentActions.delete,
        newComment: '',
      }),
    );
  });

  // Add more test cases as needed
});
