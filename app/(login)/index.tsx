import { useEffect, useState } from 'react'
import { AsyncGet } from '../../components/utility_ar/utils/asyncStorage/async';
import { Pressable } from 'react-native';
import { View } from '../../components/Themed';
import { H1, H3 } from '../../components/utility_ar/components/text/styleText';
import { router } from 'expo-router';
import { Undefinedcek } from '../../components/utility_ar/utils/undefinedCek/Undefinedcek';
import { colorTheme } from '../../components/utility_ar/components/colors/styleColors';
import { heightCal, widthScreen } from '../../components/utility_ar/utils/screenSize/Screensize';
import { DevicePermission } from '../../components/utility_ar/utils/deviceCek/deviceCek';

const index = () => {

}

export default index

export const LoginGet = ({ item, setItem, refresh }) => {
    const itemCek = Undefinedcek(item) ? null : item
    const fetchData = async () => {
        try {
            const Login = await AsyncGet('Login');
            if (Login === 'login tersimpan') {
                setItem({ ...itemCek, login: Login });
            } else {
                setItem({ ...itemCek, login: undefined });
            }
        } catch (error) {
            console.error('Gagal mengambil data:', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, [refresh])
}