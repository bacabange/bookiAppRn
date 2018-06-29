import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';

export default EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$white',
    '@media ios': {
      paddingTop: 20,
    },
    '@media android': {
      paddingTop: StatusBar.currentHeight,
    },
  },
});
