import EStyleSheet from 'react-native-extended-stylesheet';
import * as constants from '../../config/const';

export default EStyleSheet.create({
  // Container default
  container: {
    backgroundColor: '$primary',
    height: constants.INPUT_HEIGHT,
    borderRadius: constants.BORDER_RADIUS,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // width: '100%',
  },
  // Container line default
  containerLine: {
    backgroundColor: '$white',
    borderWidth: constants.BORDER_WIDTH,
    borderColor: '$primary',
  },

  containerGreen: {
    backgroundColor: '$green',
  },
  containerBlue: {
    backgroundColor: '$blue',
  },

  containerLineGreen: {
    borderColor: '$green',
  },
  containerLineBlue: {
    borderColor: '$blue',
  },

  text: {
    color: '$white',
    fontWeight: 'bold',
  },
  textPrimary: {
    color: '$primary',
  },
  textBlue: {
    color: '$blue',
  },
  textGreen: {
    color: '$green',
  },
});
