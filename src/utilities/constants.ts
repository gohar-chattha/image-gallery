import {IColors, IFontSizes} from './';

export const theme = {
  colors: {
    black: '#202125',
    white: '#ffffff',
    blue: '#FFFAFA',
    grey: '#D8D8D8',
    transparent: 'rgba(0, 0, 0, 0.7)',
  } as IColors,
  font: {
    sizes: {
      h1: 26,
      p: 20,
    } as IFontSizes,
  },
  images: {
    close: require('../assets/close.png'),
    edit: require('../assets/edit.png'),
    delete: require('../assets/delete.png'),
    send: require('../assets/send.png'),
  },
};
