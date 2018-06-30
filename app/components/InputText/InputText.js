import React, { Component } from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class InputText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };

    this.handleChangeText.bind(this);
  }

  handleChangeText(value) {
    this.setState({ text: value });
    this.props.onChangeText(value);
  }

  render() {
    return (
      <TextInput
        {...this.props}
        style={styles.container}
        onChangeText={value => this.handleChangeText(value)}
        value={this.state.text}
        underlineColorAndroid="transparent"
      />
    );
  }
}

InputText.propTypes = {
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
};

export default InputText;
