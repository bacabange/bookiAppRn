import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../../components/Container';
import { Logo } from '../../components/Logo';

export default class Splash extends Component {
  componentDidMount() {
    console.log('Montando');
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo withText />
      </Container>
    );
  }
}
