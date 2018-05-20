import React, { Component } from 'react';

import { Container } from '../../components/Container';
import { Logo } from '../../components/Logo';

export default class Splash extends Component {
  componentDidMount() {
    console.log('-> Start Application');
  }

  render() {
    return (
      <Container>
        <Logo withText />
      </Container>
    );
  }
}
