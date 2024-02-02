import React from 'react'
import { Pressable, View } from 'react-native';
import { H3 } from '../text/styleText';
import { colorTheme, stylesColors } from '../colors/styleColors';
import { heightCal, widthCal } from '../../utils/screenSize/Screensize';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export const ButtonH3 = ({ onPress, style, children }) => {
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
                    alignItems: 'center',
                    ...style
                }}>
                <H3>{children}</H3>
            </Pressable>
        </View>
    );
}
export const IconNav = ({ onPress, style, children }) => {
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
                    alignItems: 'center',
                    ...style
                }}>
                <H3>{children}</H3>
            </Pressable>
        </View>
    );
}
export const ButtonModal = ({ href, name,size, style }) => {
    const [pressed, setPressed] = React.useState(false);
    return (
        <Link href={href} asChild>
            <Pressable onPress={() => setPressed(!pressed)}>
                <FontAwesome
                    name={name}
                    size={size}
                    color={colorTheme().icon}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1, ...style }}
                />
            </Pressable>
        </Link>
    );
}