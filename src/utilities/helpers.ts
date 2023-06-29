import {Dimensions} from 'react-native';

export const heightPixel = (percentage: number): number => {
  const {height} = Dimensions.get('window');
  return height * (percentage / 100);
};
export const widthPixel = (percentage: number): number => {
  const {width} = Dimensions.get('window');
  return width * (percentage / 100);
};
