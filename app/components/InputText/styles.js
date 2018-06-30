import EStyleSheet from 'react-native-extended-stylesheet';
import * as constants from '../../config/const';

export default EStyleSheet.create({
  container: {
    backgroundColor: '$white',
    borderRadius: constants.BORDER_RADIUS,
    borderColor: '$white2',
    borderWidth: 2,
    padding: 10,
    marginHorizontal: 5,
  },
  text: {
    fontSize: 18,
    textAlign: 'right',
  },
});
