import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

import { Container } from 'app/components/Container';
import { Logo } from 'app/components/Logo';

export default class Splash extends Component {
	componentDidMount() {
		console.log('Montando');
	}

	render() {
		return (
			<Container>
				<StatusBar translucent={false} barStyle="light-content" />
				<Logo />
			</Container>
		);
	}
}
