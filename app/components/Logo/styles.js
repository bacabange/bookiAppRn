import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width / 4;

export default EStyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		justifyContent: 'center',
		alignItems: 'center',
		width: imageWidth,
		height: imageWidth,
	},
	text: {
		fontFamily: 'Roboto',
		fontWeight: 'bold',
		fontSize: 25,
		marginTop: 10,
	},
});
