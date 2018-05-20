import EStyleSheet from 'react-native-extended-stylesheet';

import { Splash } from './screens/Splash';
import { AuthScreen } from './screens/AuthScreen';

EStyleSheet.build({
  $primary: '#ef476f',
  $white: '#ffffff',
  $yellow: '#ffd166',
  $green: '#06d6a0',
  $blue: '#118ab2',
  $black: '#333333',
  $gray: '#666666',
});

export default AuthScreen;
