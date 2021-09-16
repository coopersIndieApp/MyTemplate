import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#FF6C44', //orange
  transparentPrimray: 'rgba(227, 120, 75, 0.4)',
  orange: '#FFA133',
  lightOrange: '#FFA133',
  lightOrange2: '#FDDED4',
  lightOrange3: '#FFD9AD',
  green: '#27AE60',
  red: '#FF1717',
  blue: '#0064C0',
  darkBlue: '#111A2C',
  darkGray: '#525C67',
  darkGray2: '#757D85',
  gray: '#898B9A',
  gray2: '#BBBDC1',
  gray3: '#CFD0D7',
  lightGray1: '#DDDDDD',
  lightGray2: '#F5F5F8',
  white2: '#FBFBFB',
  white: '#FFFFFF',
  black: '#000000',
  flativony: '#868B8E',
  flatwhite: '#E5DDC8',
  flatwhite2: '#EFEADD',
  flatwhite3: '#EEEDE7',
  flatgary: '#B9B7BD',
  flatblue: '#60A3D9',
  flatpink: '#FFA384',
  flatgreen: '#93E9BE',
  flatyellow: '#D6AD60',
  flatblack: '#3D393B',
  flatblack2: '#4E4F50',
  flatblack3: '#444444',

  lightblue: '#D4F1F4',

  flatgold: '#B68D40',
  flatbrown: '#78582F',
  flatbrownlight: '#D0B49F',
  flatorange: '#FF6C44',

  transparent: 'transparent',
  transparentBlack1: 'rgba(0, 0, 0, 0.1)',
  transparentBlack5: 'rgba(0, 0, 0, 0.5)',
  transparentBlack7: 'rgba(0, 0, 0, 0.7)',
};
export const SIZES = {
  width,
  height,
};

const appTheme = {COLORS, SIZES};

export default appTheme;
