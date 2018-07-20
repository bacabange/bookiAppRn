import React from 'react';
import { PropTypes } from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import EStyleSheet from 'react-native-extended-stylesheet';

import styles from './styles';

const BookItem = ({ props, detail, title }) => (
  <TouchableOpacity
    style={detail && styles.indicator_current_book}
    onPress={() => console.log(detail)}
    activeOpacity={1}
  >
    <React.Fragment>
      <View style={styles.container}>
        <View style={styles.progress_container}>
          <AnimatedCircularProgress
            size={60}
            width={5}
            fill={60}
            prefill={0}
            tintColor={EStyleSheet.value('$primary')}
            backgroundColor={EStyleSheet.value('$white7')}
            onAnimationComplete={() => console.log('onAnimationComplete')}
          >
            {fill => <Text style={{ color: EStyleSheet.value('$primary') }}>20%</Text>}
          </AnimatedCircularProgress>
        </View>

        <View style={styles.detail_container}>
          <Text style={styles.title}>Cien Años de Soledad {title}</Text>
          <Text style={styles.author}>Gabriel García Marquez</Text>
          <View style={styles.progress_pages_container}>
            <Text style={styles.progress_pages}>250</Text>
            <Text style={styles.total_pages}>/400</Text>
          </View>
        </View>
      </View>

      {detail && (
        <View style={styles.last_story_container}>
          <Text style={styles.last_story_date}>Martes, 3 de febrero de 2018</Text>
          <Text style={styles.last_story_resume}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis iure quidem.
          </Text>
        </View>
      )}
    </React.Fragment>
  </TouchableOpacity>
);

BookItem.propTypes = {
  onPress: PropTypes.func,
  detail: PropTypes.bool,
  title: PropTypes.string,
};

export default BookItem;
