import React from 'react';
import { PropTypes } from 'prop-types';
import { View, FlatList } from 'react-native';

import styles from './styles';

import { BookItem, BookItemSeparator } from './BookItem/';

const BookList = ({ props }) => (
  <View style={styles.container} {...props}>
    <FlatList
      ItemSeparatorComponent={() => <BookItemSeparator />}
      data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'e' }, { key: 'f' }]}
      renderItem={({ item }) => <BookItem title={item.key} onPress={() => console.log('book')} />}
    />
  </View>
);

BookList.propTypes = {
  props: PropTypes.any,
};

export default BookList;
