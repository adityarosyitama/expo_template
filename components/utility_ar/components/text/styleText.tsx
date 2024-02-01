import { StyleSheet } from 'react-native'
import { heightCal } from '../../utils/screenSize/Screensize'
import { Text } from '../../../Themed'
import  { colorTheme, textColor } from '../colors/styleColors'

export const styleText = StyleSheet.create({
    h1: {
        fontSize: heightCal(30),
        margin: heightCal(5),
        fontWeight: 'bold',
    },
    h2: {
        fontSize: heightCal(20),
        margin: heightCal(5),
    },
    h3: {
        fontSize: heightCal(15),
        margin: heightCal(5),
    },
    p: {
        fontSize: heightCal(12),
        margin: heightCal(5),
    }
})

export const H1 = ({ children, style }) => {
    return (
        <Text style={{
            fontSize: heightCal(30),
            margin: heightCal(5),
            fontWeight: 'bold', 
            color: colorTheme().text,
            ...style
        }}>
            {children}
        </Text>
    )
}
export const H2 = ({ children,  style }) => {
    return (
        <Text style={{
            fontSize: heightCal(20),
            margin: heightCal(5),
            fontWeight: 'bold', 
            color: colorTheme().text,
            ...style
        }}>
            {children}
        </Text>
    )
}
export const H3 = ({ children, style }) => {
    return (
        <Text style={{
            fontSize: heightCal(15),
            margin: heightCal(5),
            fontWeight: 'bold', 
            color: colorTheme().text,
            ...style
        }}>
            {children}
        </Text>
    )
}
export const P = ({ children, style }) => {
    return (
        <Text style={{
            fontSize: heightCal(12),
            margin: heightCal(5),
            color: colorTheme().text,
            ...style
        }}>
            {children}
        </Text>
    )
}