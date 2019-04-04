
import React, {Component} from 'react';
import {
	Platform, 
	StyleSheet, 
	Text, 
	View, 
	Image, 
	TouchableOpacity
} from 'react-native';
import SplashNavigation from './SplashNavigation';

import AppStyle from '../../sys/AppStyle';
import styles from './style';

export default class splashScreen extends Component{
	constructor(props){
		super(props);
		this.state={
			iconList: [
				require('../../assets/images/rss.png'),
				require('../../assets/images/twitter.png'),
				require('../../assets/images/instagram.png'),
				require('../../assets/images/youtube.png'),
			]
		}
	}

	renderIconList(){
		if(this.state.iconList.length>0){
			return this.state.iconList.map((icon, key)=>{
				return(
					<TouchableOpacity onPress={()=>{alert('Triggered !')}}>
						<Image source={icon} style={styles.splashIcon}/>
					</TouchableOpacity>
				)
			})
		}
	}

	static navigationOptions = {
    	title: 'Welcome',
  	};

	render(){
		const {navigate} = this.props.navigation;
		return(
			<View style={AppStyle.container}>
				<View style={styles.splashContainer}>
					<Image source={require('../../assets/images/splash-1.png')} style={styles.splashImage}/>
					<Text style={styles.splashTitle}>Easy Meal Ideas</Text>
					<Text style={styles.splashDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
					<View style={[AppStyle.row, {marginTop: 15}]}> 
						{this.renderIconList()}
					</View>
				</View>
				<SplashNavigation/>
			</View>
		);
	}
}