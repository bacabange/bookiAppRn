import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

import { Container } from '../../components/Container';
import { InputText } from '../../components/InputText';

const LoginScreen = () => (
  <Container style={styles.container}>
    <View>
      <InputText
        placeholder="Hola marrano"
        autoCorrect={false}
        keyboardType="email-address"
        autoFocus
        onChangeText={value => console.log(value)}
      />

      {/* <InputText
        placeholder="Hola marrano"
        autoCorrect={false}
        secureTextEntry
        textContentType="password"
        onChangeText={value => console.log(value)}
      /> */}
    </View>
  </Container>
);

export default LoginScreen;
