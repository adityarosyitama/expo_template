import { Dimensions } from 'react-native';
import { Device } from '../deviceCek/deviceCek';

function getScreenDimensions() {
  const { width, height } = Dimensions.get('window');
  return {
    widthScreen: width,
    heightScreen: height,
  };
}

// Cara menggunakannya:
export const { widthScreen, heightScreen } = getScreenDimensions();

export const widthCal = (i) => {
  const res = widthScreen * i / widthDefault
  return res
}
export const heightCal = (i) => {
  const res = heightScreen * i / heightDefault
  const _res = Device() === 'web' ? widthCal(i) * 0.7 : res
  return _res
}

const heightDefault = 812
const widthDefault = 375