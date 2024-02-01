import React from 'react'
import { View } from '../../../Themed'
import { heightCal } from '../../utils/screenSize/Screensize'
import {  backgroundColor, colorTheme } from '../colors/styleColors'

export function BackgroundCenter({ children }) {
  return (
    <View style={{ backgroundColor: colorTheme().background, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {children}
    </View>
  )
}
export function BackgroundTop({ children }) {
  return (
    <View style={{ backgroundColor:  colorTheme().background,flex: 1, top: 0, paddingTop: heightCal(20) }}>
      {children}
    </View>
  )
}
