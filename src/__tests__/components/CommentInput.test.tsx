import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {CommentInput, CommentInputProps} from '../../components/CommentInput';
import {TESTIDS} from '../../utilities';

describe('CommentInput', () => {
  const mockProps: CommentInputProps = {
    value: '',
    onChangeText: jest.fn(),
    onSend: jest.fn(),
    placeholder: 'Enter comment',
    testID: TESTIDS.commentInput,
  };

  it('renders correctly', () => {
    const {getByTestId} = render(<CommentInput {...mockProps} />);
    const input = getByTestId(TESTIDS.commentInput);
    expect(input).toBeDefined();
    expect(input.props.placeholder).toBe('Enter comment');
  });

  it('calls onChangeText callback when the text input value changes', () => {
    const {getByTestId} = render(<CommentInput {...mockProps} />);
    const input = getByTestId(TESTIDS.commentInput);
    fireEvent.changeText(input, 'Gohars comment');
    expect(mockProps.onChangeText).toHaveBeenCalledTimes(1);
  });

  it('calls onSend callback when the send button is pressed', () => {
    const {getByTestId} = render(<CommentInput {...mockProps} />);
    const sendButton = getByTestId(TESTIDS.commentSendButton);
    fireEvent.press(sendButton);
    expect(mockProps.onSend).toHaveBeenCalledTimes(1);
  });
});
