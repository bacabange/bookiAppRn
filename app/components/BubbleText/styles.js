import EStyleSheet from 'react-native-extended-stylesheet';
import * as constants from '../../config/const';

export default EStyleSheet.create({
  container: {
    backgroundColor: '$white7',
    borderRadius: constants.BORDER_RADIUS,
    alignItems: 'stretch',
    width: '80%',
    padding: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'right',
  },
});
