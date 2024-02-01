import { useGlobalSearchParams, useLocalSearchParams } from 'expo-router';
import { SplashGet } from '.';
import { BackgroundCenter } from '../../components/utility_ar/components/background/background';
import { H1 } from '../../components/utility_ar/components/text/styleText';

export default function TabLayout() {
  // const { colorScheme } = useGlobalSearchParams()
  const { darkTheme } = useLocalSearchParams()
  // console.log('darkTheme', darkTheme)
  // router.setParams({ q: search }); //untuk set parameter
  return (
    <BackgroundCenter>
      <SplashGet />
      <H1 >SplashScreen</H1>
    </BackgroundCenter>
  );
}
