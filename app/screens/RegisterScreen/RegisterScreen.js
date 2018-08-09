import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import lang from '../../i18n';

import styles from './styles';

import { Container } from '../../components/Container';
import { InputGroup } from '../../components/InputGroup';
import { InputText } from '../../components/InputText';
import { Button } from '../../components/Button';
import { ButtonLink } from '../../components/ButtonLink';

import * as constants from '../../config/const';

const RegisterScreen = () => (
  <Container style={styles.container}>
    <View style={styles.fieldsContainer}>
      <KeyboardAvoidingView behavior="padding">
        <InputGroup label={lang('name')}>
          <InputText
            placeholder="Jhon Doe"
            autoCorrect={false}
            autoFocus
            onChangeText={value => console.log(value)}
          />
        </InputGroup>

        <InputGroup label={lang('email')}>
          <InputText
            placeholder="jhon.doe@example.com"
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

        <Button text={lang('register')} buttonColor={constants.BTN_PRIMARY} />

        <ButtonLink text={lang('login_txt_3')} style={styles.buttonLink} />
      </KeyboardAvoidingView>
    </View>
  </Container>
);

export default RegisterScreen;
