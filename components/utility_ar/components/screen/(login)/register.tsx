import { View } from 'react-native'
import React from 'react'
import { Text } from '../../../../Themed'
import { styleText } from '../../text/styleText'

const Register = ({ item, setItem, screen }) => {
  return (
    <View>
      {screen === 'register' ?
        <View>
          <Text style={{...styleText.h3}}>Register</Text>
        </View>
        : null}
    </View>
  )
}

export default Register