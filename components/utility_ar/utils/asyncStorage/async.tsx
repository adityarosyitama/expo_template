import AsyncStorage from '@react-native-async-storage/async-storage';

export const AsyncGet = async (Var) => {
    try {
        const request = await AsyncStorage.getItem(Var);
        console.log(`Get ${Var} =>`,request);
        return request;
    } catch (error) {
        console.error('Gagal menyimpan data:', error);
    }
}
export const AsyncPost = async ({ Var, Value }) => {
    try {
        const request = await AsyncStorage.setItem(Var, Value);
        console.log(`Post ${Var} success`);
        return request;
    } catch (error) {
        console.error('Gagal menyimpan data:', error);
    }
}
export const AsyncDelete = async (Var) => {
    try {
        const request = await AsyncStorage.removeItem(Var);
        console.log(`Delete ${Var} success`);
        return request;
    } catch (error) {
        console.error('Gagal menyimpan data:', error);
    }
}