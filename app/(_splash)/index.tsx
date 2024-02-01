import { useEffect } from 'react'
import { router } from 'expo-router';
import { AsyncGet } from '../../components/utility_ar/utils/asyncStorage/async';

const Index = () => {
}

export default Index

export function SplashGet() {
  const fetchData = async () => {
    try {
      const Login = await AsyncGet('Login');
      if (Login === 'login tersimpan') {
        router.push('(tabs)')
      } else {
        router.push('(login)')
      }
    } catch (error) {
      console.error('Gagal mengambil data:', error);
    }
  };
  useEffect(() => {
    const timerId = setTimeout(() => {
      fetchData();
    }, 3000);
    return () => clearTimeout(timerId);
  }, []);
}