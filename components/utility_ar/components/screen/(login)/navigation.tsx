import { Pressable, StyleSheet, View,} from 'react-native'
import React from 'react'
import { Text } from '../../../../Themed'
import { H3, styleText } from '../../text/styleText'

const Navigation = ({setScreen}) => {
  return (
    <View style={{flexDirection:'row'}}>
      <Pressable onPress={()=>setScreen('login')}>
        <H3>login</H3>
      </Pressable>
      <Pressable onPress={()=>setScreen('register')}>
        <H3>register</H3>
      </Pressable>
      <Pressable onPress={()=>setScreen('reset')}>
        <H3>reset password</H3>
      </Pressable>
    </View>
  )
}

export default Navigation

const styles = StyleSheet.create({})