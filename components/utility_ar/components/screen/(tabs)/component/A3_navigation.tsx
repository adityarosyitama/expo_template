import { Modal, Pressable, View } from 'react-native'
import React, { useState } from 'react'
import { ButtonH3, ButtonIcon } from '../../../button/Button'
import { colorTheme } from '../../../colors/styleColors'
import { heightCal, heightScreen, widthCal, widthScreen } from '../../../../utils/screenSize/Screensize'
import { DevicePermission } from '../../../../utils/deviceCek/deviceCek'
import { FontAwesome } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { H3, P } from '../../../text/styleText'
import { Undefinedcek } from '../../../../utils/undefinedCek/Undefinedcek'

const A3_navigation = () => {
    const [press, setPress] = useState(false)
    return (
        <View>
            {DevicePermission('web') ?
                <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                    <Pressable onPress={() => setPress(!press)}>
                        <FontAwesome
                            name="info-circle"
                            size={heightCal(25)}
                            color={colorTheme().text}
                            style={{ opacity: press ? 0.5 : 1 }}
                        />
                    </Pressable>
                    {press ? <Itembutton press={press} setPress={setPress} /> : null}
                </View>
                :
                null
            }
        </View>
    )
}

export default A3_navigation

const Itembutton = ({ press, setPress }) => {
    console.log('itembutton')
    return (
        <Modal
            visible={press}
            transparent={true}
            style={{ flex: 1, height: heightScreen, width: widthScreen }}>
            <Pressable onPress={() => setPress(!press)}
                style={{
                    height: heightScreen,
                    width: widthScreen
                }}>
                <View style={{
                    borderColor: colorTheme().block,
                    right: widthCal(10),
                    borderRadius: heightCal(1),
                    position: 'absolute',
                    top: heightCal(40),
                    alignItems: 'flex-end'
                }}>
                    <HomeIcon />
                    <ProfileIcon />
                </View>
            </Pressable>
        </Modal>
    )
}

export const BarLabel = ({ focused, color, barTitle }) => {
    const _color = color === '#8E8E8F' ? colorTheme().block : color
    const _focused = focused ? 'bold' : 'normal'
    return (<P style={{ color: _color, fontWeight: 'bold' }}>{barTitle}</P>)
}

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
    size: number;
}) {
    return <FontAwesome {...props} />;
}

export const HomeIcon = ({ color }) => {
    const _color = color === '#8E8E8F' || Undefinedcek(color) ? colorTheme().block : color
    const res = DevicePermission('web') ?
        <Link href={'/(tabs)/_layout'}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TabBarIcon name="home" color={colorTheme().icon} size={heightCal(20)} />
                <H3>{'  '}Home Screen</H3>
            </View>
        </Link>
        :
        <TabBarIcon name="home" color={_color} size={heightCal(25)} />
    return res
}
export const ProfileIcon = ({ color }) => {
    const _color = color === '#8E8E8F' || Undefinedcek(color) ? colorTheme().block : color
    const res = DevicePermission('web') ?
        <Link href={'/(tabs)/two'}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TabBarIcon name="support" color={colorTheme().icon} size={heightCal(20)} />
                <H3>{'  '}Profile Screen</H3>
            </View>
        </Link>
        :
        <TabBarIcon name="support" color={_color} size={heightCal(25)} />
    return res
}