import React from 'react'
import { Pressable, View } from 'react-native';
import { H3 } from '../text/styleText';
import { colorTheme, stylesColors } from '../colors/styleColors';
import { heightCal, widthCal } from '../../utils/screenSize/Screensize';

export const ButtonH3 = ({ onPress }) => {
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Pressable onPress={onPress}
                style={{
                    borderWidth: heightCal(2),
                    borderColor: colorTheme().border,
                    backgroundColor: colorTheme().block,
                    paddingHorizontal: widthCal(20),
                    paddingVertical: heightCal(5),
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems:'center'
                }}>
                <H3>Logout</H3>
            </Pressable>
        </View>
    );
}