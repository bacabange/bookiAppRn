import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    backgroundColor: '$white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  detail_container: {
    marginLeft: 20,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '$black',
  },
  author: {
    color: '$gray2',
    fontSize: 15,
  },
  progress_pages_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 5,
  },
  progress_pages: {
    color: '$primary',
    fontStyle: 'italic',
    fontSize: 14,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '$white7',
  },
});
