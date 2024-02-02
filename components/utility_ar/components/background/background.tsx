import React from 'react'
import { View } from '../../../Themed'
import { heightCal, widthCal } from '../../utils/screenSize/Screensize'
import { backgroundColor, colorTheme } from '../colors/styleColors'
import { H2 } from '../text/styleText'
import A3_navigation from '../screen/(tabs)/component/A3_navigation'

export function BackgroundCenter({ children }) {
  return (
    <View style={{ flex: 1, backgroundColor: colorTheme().background, justifyContent: 'center', alignItems: 'center', paddingHorizontal: widthCal(5) }}>
      {children}
    </View>
  )
}
export function BackgroundTop({ children, titleScreen, header }) {
  return (
    <View style={{ flex: 1, backgroundColor: colorTheme().background, top: 0, paddingTop: heightCal(20), paddingHorizontal: widthCal(5) }}>
      <View style={{ backgroundColor: colorTheme().background, flexDirection: 'row', justifyContent: 'space-between' }}>
        <H2>{titleScreen ?? titleScreen}</H2>
        {header ??
          <A3_navigation />}
      </View>
      <View style={{ flex: 1, backgroundColor: colorTheme().background, justifyContent: 'center', alignItems: 'center' }}>
        {children}
      </View>
    </View>
  )
}
