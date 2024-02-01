import { View } from 'react-native'
import React from 'react'
import { Text } from '../../../../Themed'
import { styleText } from '../../text/styleText'

const Reset = ({ item, setItem, screen }) => {
  return (
    <View>
      {screen === 'reset' ?
        <View>
          <Text style={{...styleText.h3}}>Reset</Text>
        </View>
        : null}
    </View>
  )
}

export default Reset