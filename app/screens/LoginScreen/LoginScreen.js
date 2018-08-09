import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, KeyboardAvoidingView } from 'react-native';
import lang from '../../i18n';

import styles from './styles';

import { Container } from '../../components/Container';
import { InputGroup } from '../../components/InputGroup';
import { InputText } from '../../components/InputText';
import { Button } from '../../components/Button';
import { ButtonLink } from '../../components/ButtonLink';

import { loginUser } from '../../actions/authAction';

import * as constants from '../../config/const';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
  }

  handlePressLogin = () => {
    this.props.dispatch(loginUser(this.state.email, this.state.password));
    // this.props.navigation.navigate('App');
  };

  handleChangeText = (type, value) => {
    this.setState({ [type]: value });
  };

  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.fieldsContainer}>
          <KeyboardAvoidingView behavior="padding" enabled>
            <InputGroup label={lang('email')}>
              <InputText
                placeholder="jhon.does@example.com"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={value => this.handleChangeText('email', value)}
              />
            </InputGroup>

            <InputGroup label={lang('password')}>
              <InputText
                autoCorrect={false}
                textContentType="password"
                secureTextEntry
                returnKeyType="done"
                onChangeText={value => this.handleChangeText('password', value)}
              />
            </InputGroup>

            <ButtonLink text={lang('login_txt_2')} style={styles.buttonLink} />

            <Button
              text={lang('login')}
              onPress={this.handlePressLogin}
              buttonColor={constants.BTN_PRIMARY}
            />
          </KeyboardAvoidingView>
        </View>
      </Container>
    );
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.any,
  dispatch: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
};

const mapStateToProps = (state) => {
  const email = state.authReducer.email;
  const password = state.authReducer.password;

  return {
    email,
    password,
  };
};

export default connect(mapStateToProps)(LoginScreen);
