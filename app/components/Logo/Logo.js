import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const Logo = () => {
	return (
		<View style={styles.container}>
			<Image resizeMode="contain" style={styles.image} source={require('./images/Logo.png')} />
			<Text style={styles.text}> Booki </Text>
		</View>
	);
};

export default Logo;
