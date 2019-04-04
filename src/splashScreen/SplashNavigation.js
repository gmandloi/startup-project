import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity
} from 'react-native';

import AppStyle from '../../sys/AppStyle';
import styles from './style';

export default class SplashNavigation extends Component{
	render(){
		return(
			<View style={[styles.navigationContainer, {justifyContent: 'space-between'}]}>
				<View>
					<TouchableOpacity onPress={()=>{alert('Triggered !')}}>
						<Text style={[AppStyle.whiteClr, AppStyle.normalFont]}>Skip</Text>
					</TouchableOpacity>
				</View>

				<View>
					<TouchableOpacity onPress={()=>{alert('Triggered !')}}>
						<View style= {{display: 'flex', alignSelf: 'flex-end'}}>
							<Text
								style={[ 
									AppStyle.whiteClr,
									AppStyle.normalFont, 
									{width: 50, marginRight: 5}
								]}
							>
								Next
							</Text>
							<Image 
								source={require('../../assets/images/next-arrow.png')} 
								style={{
									height: 20, 
									width: 20, 
									alignSelf: 'flex-end', 
									position: 'absolute', 
									top: 0, 
									right: 0
								}}
							/>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}