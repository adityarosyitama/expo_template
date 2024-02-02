import { useEffect } from 'react'
import { AsyncGet } from '../../components/utility_ar/utils/asyncStorage/async';
import { Undefinedcek } from '../../components/utility_ar/utils/undefinedCek/Undefinedcek';

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