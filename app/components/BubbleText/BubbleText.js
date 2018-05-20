import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const BubbleText = props => (
  <View style={styles.container}>
    <Text style={styles.text}>Cuanto más lees,</Text>
    <Text style={styles.text}>Más cosas sabrás.</Text>
  </View>
);

export default BubbleText;
