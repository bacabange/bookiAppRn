import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';

import styles from './styles';

import { Container } from '../../components/Container';
import { InputGroup } from '../../components/InputGroup';
import { InputText } from '../../components/InputText';
import { Button } from '../../components/Button';
import { ButtonLink } from '../../components/ButtonLink';

import * as constants from '../../config/const';

const LoginScreen = () => (
  <Container style={styles.container}>
    <KeyboardAvoidingView behavior="padding" enabled>
      <View style={styles.fieldsContainer}>
        <InputGroup label="Email">
          <InputText
            placeholder="jhon.doe@example.com"
            autoCorrect={false}
            keyboardType="email-address"
            autoFocus
            onChangeText={value => console.log(value)}
          />
        </InputGroup>

        <InputGroup label="Password">
          <InputText
            placeholder="Hola marrano"
            autoCorrect={false}
            textContentType="password"
            secureTextEntry
            returnKeyType="done"
            onChangeText={value => console.log(value)}
          />
        </InputGroup>

        <ButtonLink text="Recordar contraseña" style={styles.buttonLink} />

        <Button text="Login" buttonColor={constants.BTN_PRIMARY} />
      </View>
    </KeyboardAvoidingView>
  </Container>
);

export default LoginScreen;
