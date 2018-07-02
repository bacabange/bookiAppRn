import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';

import styles from './styles';

import { Container } from '../../components/Container';
import { InputGroup } from '../../components/InputGroup';
import { InputText } from '../../components/InputText';
import { Button } from '../../components/Button';
import { ButtonLink } from '../../components/ButtonLink';

import * as constants from '../../config/const';

const RegisterScreen = () => (
  <Container style={styles.container}>
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <View style={styles.fieldsContainer}>
        <InputGroup label="Name">
          <InputText
            placeholder="Jhon Doe"
            autoCorrect={false}
            autoFocus
            onChangeText={value => console.log(value)}
          />
        </InputGroup>

        <InputGroup label="Email">
          <InputText
            placeholder="jhon.doe@example.com"
            autoCorrect={false}
            keyboardType="email-address"
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

        <Button text="Register" buttonColor={constants.BTN_PRIMARY} />

        <ButtonLink text="Tienes una cuenta? Inicia sesión aquí" style={styles.buttonLink} />
      </View>
    </KeyboardAvoidingView>
  </Container>
);

export default RegisterScreen;
