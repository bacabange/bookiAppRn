import React from 'react';
import { PropTypes } from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

import { BookItem } from './BookItem/';

const BookList = ({ props }) => (
  <View style={styles.container} {...props}>
    <SwipeListView
      useFlatList
      disableRightSwipe
      directionalDistanceChangeThreshold={1}
      closeOnRowBeginSwipe
      rightOpenValue={-70}
      stopRightSwipe={-70}
      previewRowKey="0"
      previewOpenValue={-10}
      previewOpenDelay={3000}
      keyExtractor={(rowData, index) => rowData.key.toString()}
      data={[
        { key: 'a', detail: true },
        { key: 'b', detail: false },
        { key: 'c', detail: false },
        { key: 'd', detail: false },
        { key: 'e', detail: false },
        { key: 'f', detail: false },
      ]}
      renderItem={(row) => {
        console.log(row);
        return <BookItem title={row.item.key} detail={row.item.detail} />;
      }}
      renderHiddenItem={item => (
        <View style={styles.row_back}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.back_right_btn]}
            onPress={() => console.log('delete')}
          >
            <Text style={styles.back_text_white}>
              <Icon name="plus" size={18} color="#ffffff" />
            </Text>
          </TouchableOpacity>
        </View>
      )}
    />
  </View>
);

BookList.propTypes = {
  props: PropTypes.any,
};

export default BookList;
