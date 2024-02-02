import { Logout } from '../components/utility_ar/components/screen/(login)/login';
import { BackgroundCenter } from '../components/utility_ar/components/background/background';
import { H2 } from '../components/utility_ar/components/text/styleText';

export default function ModalScreen() {
  return (
    <BackgroundCenter>
      <H2>Modal</H2>
      <Logout screen={'logout'}/>
    </BackgroundCenter>
  );
}

