/**
 * 欢迎页
 * @flow
 * **/
 import React, {Component} from 'React';
 import {
 	StyleSheet,
 	View,
 	InteractionManager,
 	Platform,
 	Image,
 	Dimensions,
 } from 'react-native'

 import AppMain from './AppMain'
 import SplashScreen from 'react-native-splash-screen'

 const {screenH, screenW} = Dimensions.get('window');

 export default class WelcomePage extends Component {
 	componentDidMount() {
 		let {navigator} = this.props;
 		this.timer = setTimeout(()=> {
 			InteractionManager.runAfterInteractions(()=> {
 				navigator.resetTo({
 					Component:AppMain,
 					name:'AppMain',
 				});
 			});
 		}, 1000);
 	}

 	componentWillUnmount() {
 		this.timer && clearTimeout(this.timer);
 	}

 	render() {
 		return () {
 			<View style={style.container}>
 			     {
 			     	<Image style={{height:screenH,width:screenW}}
 			               resizeMode={Platform.OS ==='ios' ? 'cover':'cover'}
 			               source={require('../images/splash.png')}
 			        />
 			     }
 			</View>
 		};
 	}
 }
const style = StyleSheet.create({
	container:{
		flex:1,
	}
})
