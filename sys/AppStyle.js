import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
	whiteClr: {
		color: '#fff',
	},

	width50: {
		width: '50%', 
		justifyContent: 'flex-start'
	},

	alginLeft: {
		textAlign: 'left',
	},

	alginRight: {
		textAlign: 'right',
	},

	fontTiny: {
		fontSize: 9,
	},

	smallFont: {
		fontSize: 11,
	},

	normalFont: {
		fontSize: 14,
	},

	largeFont: {
		fontSize: 18,
	},

	xlFont: {
		fontSize: 22,
	},

	hugeFont: {
		fontSize: 40,
	},

	container: {
		flex: 1, 
		height: '100%',
	},

	row: {
		display: 'flex', 
		flexDirection: 'row',
	}
})
