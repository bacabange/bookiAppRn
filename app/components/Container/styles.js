import EStyleSheet from 'react-native-extended-stylesheet';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$white',
    paddingTop: getStatusBarHeight(),
  },
});
