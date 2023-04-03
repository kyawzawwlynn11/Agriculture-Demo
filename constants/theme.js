const {Dimensions} = require('react-native');

const {width, height} = Dimensions.get('window');

export const COLORS = {
    primary : '#4CD195',
    secondary: '#2D3747',
    mainbackground: '#EDF2F6',
    green: '#17938b',
    white: '#FFF',
    title: '#482755',
};

export const SIZES = {
      h1: 20,
      h2: 18,
      h3: 16,
      h4: 14,
      h5: 12,
      h6: 10,

      width,
      height
};

export const FONTWEIGHT = {
    bold: 'bold',
    normal: 'normal',
    weight500: '500',
    weight700: '700',
};