import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import styles from './styles';

class Logo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Image resizeMode="contain" style={styles.image} source={require('./images/Logo.png')} />

        {this.props.withText && <Text style={styles.text}> Booki </Text>}
      </View>
    );
  }
}

Logo.propTypes = {
  withText: PropTypes.bool,
};

export default Logo;
