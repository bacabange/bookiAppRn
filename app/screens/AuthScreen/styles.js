import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '$white',
    paddingHorizontal: 15,
    alignItems: 'stretch',
  },
  textAction: {
    textAlign: 'center',
    marginBottom: 15,
  },
  wrapperTop: {
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  wrapperBottom: {
    flex: 1,
  },
});
