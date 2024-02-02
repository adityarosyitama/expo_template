import { useGlobalSearchParams } from "expo-router";

const tintColorLight = {
  tx: '#f96d6d', 
  bg: '#8fb1e9', 
  block: '#a9d7f6', 
  icon: '#b84d69'
};
const tintColorDark = {
  tx: '#639cd9', 
  bg: '#1D2E41', 
  block: '#342056', 
  icon: '#9ea0e2',
};

export const stylesColors = {
  light: {
    //tx
    text: tintColorLight.tx,
    tint: tintColorLight.tx,
    border: tintColorLight.tx,
    //icon
    icon: tintColorLight.icon,
    //block
    block: tintColorLight.block,
    //bg
    background: tintColorLight.bg,
    tabIconDefault: tintColorLight.bg,
    tabIconSelected: tintColorLight.bg,
  },
  dark: {
    //tx
    text: tintColorDark.tx,
    tint: tintColorDark.tx,
    border: tintColorDark.tx,
    //icon
    icon: tintColorDark.icon,
    //block
    block: tintColorDark.block,
    //bg
    background: tintColorDark.bg,
    tabIconDefault: tintColorDark.bg,
    tabIconSelected: tintColorDark.bg,
  },
};

export const colorTheme = () => {
  const { darkTheme } = useGlobalSearchParams()
  const _darkcolorTheme = darkTheme ? stylesColors.dark : stylesColors.light
  return _darkcolorTheme
}