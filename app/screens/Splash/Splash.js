import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container } from '../../components/Container';
import { Logo } from '../../components/Logo';

class Splash extends Component {
  componentDidMount() {
    console.log('-> Start Application');

    setTimeout(() => {
      this.props.navigation.navigate('Auth');
    }, 1000);
  }

  render() {
    return (
      <Container>
        <Logo withText />
      </Container>
    );
  }
}

Splash.propTypes = {
  navigation: PropTypes.any,
};

export default Splash;
