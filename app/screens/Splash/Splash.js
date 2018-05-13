import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import { Container } from 'app/components/Container';
import { Logo } from 'app/components/Logo';

export default () => (
	<Container>
		<StatusBar translucent={false} barStyle="light-content" />
		<Logo />
	</Container>
);
