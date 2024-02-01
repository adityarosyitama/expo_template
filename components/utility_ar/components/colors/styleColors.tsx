import { useGlobalSearchParams } from "expo-router";

const tintColorLight = { tx: 'rgba(0,255,0,1)', bg: 'rgba(255,255,255,1)',block:'rgba(255,255,0,1)',icon:'rgba(0,0,150,1)' };
const tintColorDark = { tx: '#fff', bg: 'rgba(0,0,0,1)',block:'rgba(255,0,255,1)' ,icon:'rgba(0,0,255,1)'  };

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