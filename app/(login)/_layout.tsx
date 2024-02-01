import { useState } from 'react';
import { BackgroundCenter } from '../../components/utility_ar/components/background/background';
import { LoginGet } from '.';
import Login from '../../components/utility_ar/components/screen/(login)/login';
import Navigation from '../../components/utility_ar/components/screen/(login)/navigation';
import Register from '../../components/utility_ar/components/screen/(login)/register';
import Reset from '../../components/utility_ar/components/screen/(login)/reset';
import { ButtonLogin } from '../../components/utility_ar/components/screen/(login)/component/subcomponent/A2_button';

export default function TabLayout() {
  const [screen, setScreen] = useState('login')
  const [item, setItem] = useState({})
  const [refresh, setRefresh] = useState(false)
  return (
    <BackgroundCenter>
      <LoginGet refresh={refresh} setItem={setItem} item={item} />
      <ButtonLogin item={item} />
      <Login item={item} setItem={setItem} refresh={refresh} setRefresh={setRefresh} screen={screen} />
      <Register item={item} setItem={setItem} screen={screen} />
      <Reset item={item} setItem={setItem} screen={screen} />
      <Navigation setScreen={setScreen} />
    </BackgroundCenter>
  );
}
