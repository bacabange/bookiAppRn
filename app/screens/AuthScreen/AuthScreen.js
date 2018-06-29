import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

import { Container } from '../../components/Container';
import { Button } from '../../components/Button';
import { BubbleText } from '../../components/BubbleText';
import * as constants from '../../config/const';

const AuthScreen = () => (
  <Container style={styles.container}>
    <View style={styles.wrapperTop}>
      <BubbleText />
    </View>
    <View style={styles.wrapperBottom}>
      <Text style={styles.textAction}>Empieza a leer en forma</Text>

      <View style={styles.wrapperHorintalButtons}>
        <View style={styles.buttonContainer}>
          <Button
            style={{ marginHorizontal: 5 }}
            buttonText="Login"
            buttonColor={constants.BTN_PRIMARY}
            buttonLine
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            style={{ marginHorizontal: 5 }}
            buttonText="Register"
            buttonColor={constants.BTN_PRIMARY}
          />
        </View>
      </View>

      <Button
        style={{ marginHorizontal: 5 }}
        buttonText="Login With Faceboook"
        buttonColor={constants.BTN_BLUE}
      />
    </View>
  </Container>
);

export default AuthScreen;
