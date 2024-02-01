import React, { useState } from 'react'
import { BackHandler, Pressable, StyleSheet, View } from 'react-native'
import { useNavigation, useRootNavigation } from 'expo-router';
import { Text } from '../../../../Themed';
import { H2, H3, P, styleText } from '../../text/styleText';
import { AsyncDelete, AsyncPost } from '../../../utils/asyncStorage/async';
import { Undefinedcek } from '../../../utils/undefinedCek/Undefinedcek';

const Login = ({ refresh, setRefresh, item, setItem, screen }) => {
    const itemCek = Undefinedcek(item) ? null : item
    const handleLogin = async () => {
        try {
            const reponse = await AsyncPost({ Var: 'Login', Value: 'login tersimpan' });
            setItem({ ...itemCek, login: reponse });
            setRefresh(!refresh)
        } catch (error) {
            console.error('Gagal mengambil data:', error);
        }
    }
    return (
        <View>
            {screen === 'login' ?
                <View style={{ justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Pressable onPress={handleLogin}>
                            <H2>Login push</H2>
                        </Pressable>
                        <Logout refresh={refresh} setRefresh={setRefresh}/>
                    </View>
                    {Undefinedcek(item.login) ? null :
                        <View style={{ backgroundColor: 'red' }}>
                            <P>{item.login}</P>
                        </View>}
                </View>
                : null}
        </View>
    )
}

export default Login

export const Logout = ({ screen, setRefresh, refresh }) => {
    const rootnavigation = useRootNavigation()
    const _screen = screen === 'logout' ? true : false
    const handleDelete = async (Var) => {
        try {
            const reponse = await AsyncDelete(Var);
            if (_screen) {
                rootnavigation.navigate('(login)', { param1: 'logout' });
                // BackHandler.exitApp();
            }
            if(!Undefinedcek(setRefresh)){
                setRefresh(!refresh)
            }
        } catch (error) {
            console.error('Gagal mengambil data:', error);
        }
    }
    return (
        <Pressable onPress={() => handleDelete('Login')} >
            <H3>Logout</H3>
        </Pressable>
    );
}

const styles = StyleSheet.create({})