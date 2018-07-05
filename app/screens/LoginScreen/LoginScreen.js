import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, KeyboardAvoidingView } from 'react-native';
import lang from '../../i18n';

import styles from './styles';

import { Container } from '../../components/Container';
import { InputGroup } from '../../components/InputGroup';
import { InputText } from '../../components/InputText';
import { Button } from '../../components/Button';
import { ButtonLink } from '../../components/ButtonLink';

import * as constants from '../../config/const';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePressLogin = () => {
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <Container style={styles.container}>
        <KeyboardAvoidingView behavior="padding" enabled>
          <View style={styles.fieldsContainer}>
            <InputGroup label={lang('email')}>
              <InputText
                placeholder="jhon.does@example.com"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={value => console.log(value)}
              />
            </InputGroup>

            <InputGroup label={lang('password')}>
              <InputText
                autoCorrect={false}
                textContentType="password"
                secureTextEntry
                returnKeyType="done"
                onChangeText={value => console.log(value)}
              />
            </InputGroup>

            <ButtonLink text={lang('login_txt_2')} style={styles.buttonLink} />

            <Button
              text={lang('login')}
              onPress={this.handlePressLogin}
              buttonColor={constants.BTN_PRIMARY}
            />
          </View>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.any,
};

export default LoginScreen;
