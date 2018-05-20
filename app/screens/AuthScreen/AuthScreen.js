import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

import { Container } from '../../components/Container';
import { Button } from '../../components/Button';
import * as constants from '../../config/const';

const AuthScreen = () => (
  <Container style={styles.container}>
    <View>
      <Text>Aqui va el componente dialogo</Text>
    </View>
    <View style={styles.wrapperButtons}>
      <Text style={styles.textAction}>Empieza a leer en forma</Text>

      <Button buttonText="Login" buttonColor={constants.BTN_PRIMARY} buttonLine />
      <Button buttonText="Register" buttonColor={constants.BTN_PRIMARY} />
    </View>
  </Container>
);

export default AuthScreen;
