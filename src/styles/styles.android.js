import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const opacity = 0.3;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: `rgba(255, 0, 0, ${opacity})`,
		padding: 40,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 35,
		fontWeight: 'bold',
		padding: 10,
		backgroundColor: 'yellow',
		borderRadius: 30,
		width: width / 2,
		height: height / 3
	}
});
