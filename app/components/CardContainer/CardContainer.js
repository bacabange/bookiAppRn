import React from 'react';
import { PropTypes } from 'prop-types';
import { View } from 'react-native';

import styles from './styles';

const CardContainer = ({ children, props }) => (
  <View style={styles.container} {...props}>
    {children}
  </View>
);

CardContainer.propTypes = {
  children: PropTypes.any,
  props: PropTypes.any,
};

export default CardContainer;
