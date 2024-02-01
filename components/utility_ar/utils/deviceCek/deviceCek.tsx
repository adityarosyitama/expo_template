import Constants from 'expo-constants';
import { Undefinedcek } from '../undefinedCek/Undefinedcek';
import { Platform } from 'react-native';

const platform = Constants.platform

export const Device = () => {
    return Platform.OS
}
export const DevicePermission = (i) => {
    const _ios = platform?.ios ? 'ios' : false
    const _and = platform?.android ? 'android' : false
    const _web = platform?.ios ? false : platform?.android ? false : 'web'
    const device = i === _ios || i === _and || i === _web
    return device
}

export const DeviceActWeb = (i) => {
    const _cek = Platform.OS === 'web' ? i() : undefined
    _cek
    return
}
export const DeviceActAndroid = (i) => {
    const _cek = Platform.OS === 'android' ? i() : undefined
    _cek
    return
}
export const DeviceActIOS = (i) => {
    const _cek = Platform.OS === 'ios' ? i() : undefined
    _cek
    return
}
export const DeviceReturn = ({ other, only, data }) => {
    const _other = Platform.OS === other ? data : ''
    const _only = Platform.OS === only ? data : ''
    const _data = other ===undefined? _only : _other
    return _data
}

