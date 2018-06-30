import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import * as constants from '../../config/const';

const ButtonLink = (props) => {
  const containerStyle = [styles.container];
  const textStyle = [styles.text];

  if (props.style) {
    containerStyle.push(props.style);
  }

  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.8}>
      <View style={containerStyle}>
        <Text style={textStyle}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

ButtonLink.propTypes = {
  onPress: PropTypes.func,
  style: PropTypes.any,
  text: PropTypes.string.isRequired,
};

export default ButtonLink;
