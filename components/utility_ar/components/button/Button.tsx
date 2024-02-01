import { View, Text } from 'react-native'
import React from 'react'

export const ButtonH3 = (i) => {
    return (
        <Pressable onPress={() => i} style={{}}>
            <H3>Logout</H3>
        </Pressable>
    );
}