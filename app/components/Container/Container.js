import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Keyboard, StatusBar } from 'react-native';

import styles from './styles';

const Container = ({ children, style }) => {
  const containerStyles = [styles.container];

  if (style) {
    containerStyles.push(style);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <React.Fragment>
        <StatusBar
          currentHeight={60}
          translucent
          barStyle="light-content"
          backgroundColor="blue"
        />
        <View style={containerStyles}>{children}</View>
      </React.Fragment>
    </TouchableWithoutFeedback>
  );
};

Container.propTypes = {
  children: PropTypes.any,
  style: PropTypes.any,
};

export default Container;
