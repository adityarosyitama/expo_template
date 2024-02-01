import { StyleSheet } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { BackgroundTop } from '../../components/utility_ar/components/background/background';
import { H2 } from '../../components/utility_ar/components/text/styleText';
import { Logout } from '../../components/utility_ar/components/screen/(login)/login';

const index = () => {
  return (<TabOneScreen/>)
}
export default index

export function TabOneScreen() {
  return (
    <BackgroundTop>
        <H2>Tab One</H2>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="app/(tabs)/index.tsx" />
        <Logout screen={'logout'}/>
    </BackgroundTop>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
