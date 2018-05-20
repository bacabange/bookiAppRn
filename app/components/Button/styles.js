import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;
const BORDER_WIDTH = 2;

export default EStyleSheet.create({
  // Container default
  container: {
    backgroundColor: '$primary',
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  // Container line default
  containerLine: {
    backgroundColor: '$white',
    borderWidth: BORDER_WIDTH,
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
