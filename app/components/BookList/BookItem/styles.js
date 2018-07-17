import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    backgroundColor: '$white',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  detail_container: {
    marginLeft: 20,
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '$black',
  },
  author: {
    color: '$gray3',
    fontSize: 15,
  },
  total_pages: {
    color: '$gray3',
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
    borderBottomColor: '$white3',
  },
  last_story_container: {
    borderTopWidth: 1,
    borderTopColor: '$white3',
    marginTop: 10,
    marginHorizontal: 15,
    paddingVertical: 10,
  },
  last_story_date: {
    fontWeight: '700',
    color: '$gray2',
    fontStyle: 'italic',
  },
  last_story_resume: {
    fontSize: 12,
  },
});
