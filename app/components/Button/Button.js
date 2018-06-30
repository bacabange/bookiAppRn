import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import * as constants from '../../config/const';

const Button = (props) => {
  const containerStyle = [styles.container];
  const textStyle = [styles.text];

  if (props.style) {
    containerStyle.push(props.style);
  }

  if (props.buttonLine) {
    switch (props.buttonColor) {
      case constants.BTN_GREEN:
        containerStyle.push(styles.containerLineGreen);
        textStyle.push(styles.textGreen);
        break;

      case constants.BTN_BLUE:
        containerStyle.push(styles.containerLineBlue);
        textStyle.push(styles.textBlue);
        break;

      default:
        containerStyle.push(styles.containerLine);
        textStyle.push(styles.textPrimary);
        break;
    }
  } else {
    switch (props.buttonColor) {
      case constants.BTN_GREEN:
        containerStyle.push(styles.containerGreen);
        break;

      case constants.BTN_BLUE:
        containerStyle.push(styles.containerBlue);
        break;

      default:
        break;
    }
  }

  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.8}>
      <View style={containerStyle}>
        <Text style={textStyle}>{props.text.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: PropTypes.func,
  style: PropTypes.any,
  text: PropTypes.string.isRequired,
  buttonLine: PropTypes.bool,
  buttonColor: PropTypes.oneOf(constants.BUTTON_STYLES),
};

export default Button;
