import { AsyncDelete, AsyncPost } from "../../../../../utils/asyncStorage/async";

export const handleDelete = async () => {
    try {
        const reponse = await AsyncDelete('Login');
    } catch (error) {
        console.error('Gagal mengambil data:', error);
    }
}

export const handleLogin = async ({ Var, Value, setItem, item, setRefresh, refresh }) => {
    try {
        const reponse = await AsyncPost({ Var, Value });
        setItem({ ...item, login: reponse });
        setRefresh(!refresh)
    } catch (error) {
        console.error('Gagal mengambil data:', error);
    }
}

