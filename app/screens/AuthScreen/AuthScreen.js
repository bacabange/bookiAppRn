import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import styles from './styles';

import { Container } from '../../components/Container';
import { Button } from '../../components/Button';
// import { BubbleText } from '../../components/BubbleText';
import { Logo } from '../../components/Logo';
import * as constants from '../../config/const';

class AuthScreen extends Component {
  componentDidMount() {
    console.log('-> Start Auth');
  }

	handlePressLogin = () => {
	  this.props.navigation.navigate('Login');
	};

	render() {
	  return (
  <Container style={styles.container}>
    <View style={styles.wrapperTop}>
      {/* <BubbleText /> */}
      <Logo withText />
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
            onPress={this.handlePressLogin}
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
	}
}

AuthScreen.propTypes = {
  navigation: PropTypes.any,
};

export default AuthScreen;
