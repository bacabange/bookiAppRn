import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const InputGroup = ({ label, children }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    {children}
  </View>
);

InputGroup.propTypes = {
  label: PropTypes.string,
};

export default InputGroup;
