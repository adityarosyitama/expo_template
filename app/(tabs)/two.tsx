import { FontAwesome } from '@expo/vector-icons';
import EditScreenInfo from '../../components/EditScreenInfo';
import { BackgroundTop } from '../../components/utility_ar/components/background/background';
import { H2 } from '../../components/utility_ar/components/text/styleText';
import { heightCal } from '../../components/utility_ar/utils/screenSize/Screensize';
import { colorTheme } from '../../components/utility_ar/components/colors/styleColors';
import { Button, Pressable } from 'react-native';
import { ButtonModal } from '../../components/utility_ar/components/button/Button';

export default function TabTwoScreen() {
  return (
    <BackgroundTop
      titleScreen={'Profile'}
      header={<ButtonModal href={'/modal'} size={heightCal(25)} name={'info-circle'} />}>
      <H2>Tab Two</H2>
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </BackgroundTop>
  );
}
