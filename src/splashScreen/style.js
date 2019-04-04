import { StyleSheet } from 'react-native';
import config from '../../sys/config';

export default styles = StyleSheet.create({
	/*Spash navagation css*/
	navigationContainer: {
		backgroundColor: '#49B955',
		width: '100%',
		position: 'absolute',
		bottom: 0,
		padding: 15,
		flex: 1,
		flexDirection: 'row',
	},

	nextArrow: {
		height: 20, 
		width: 20, 
		alignSelf: 'flex-end', 
		position: 'absolute',
		top: 0, 
		right: 0,
	},

	/*Splash screen css*/
	splashContainer:{
		flex: 1, 
		justifyContent: 'center', 
		padding: 20, 
		backgroundColor: config.primaryColor, 
		alignItems: 'center',
	},

	splashImage: {
		height: 180, 
		width: 300
	},

	splashTitle: {
		fontSize: 50, 
		fontWeight: 'bold', 
		color: '#fff', 
		textAlign: 'center'
	},

	splashDescription:{
		fontSize: 18, 
		color: '#fff', 
		lineHeight: 25, 
		textAlign: 'center', 
		marginTop: 15
	},

	splashIcon: {
		height: 30, 
		width: 30, 
		margin: 10
	}
});