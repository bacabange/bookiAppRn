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
    marginBottom: 10,
  },
  wrapperTop: {
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  wrapperBottom: {
    flex: 1,
  },
  wrapperHorintalButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flex: 1,
  },
});
