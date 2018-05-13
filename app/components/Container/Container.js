import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const Container = ({ children }) => (
  <View>
    <Text>Puto</Text>
    {children}
  </View>
);

Container.propTypes = {
  children: PropTypes.element,
};

export default Container;
