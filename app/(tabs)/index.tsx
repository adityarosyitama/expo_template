import EditScreenInfo from '../../components/EditScreenInfo';
import { BackgroundTop } from '../../components/utility_ar/components/background/background';
import { Logout } from '../../components/utility_ar/components/screen/(login)/login';

const index = () => {
  return (<TabOneScreen />)
}
export default index

export function TabOneScreen() {
  return (
    <BackgroundTop titleScreen={'Homepage'}>
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      <Logout screen={'logout'} />
    </BackgroundTop>
  );
}
