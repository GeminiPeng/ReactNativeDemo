'use strict';
import React,{Component}from 'react';
import{ Navigator }from 'react-native-deprecated-custom-components';

import WelcomePage from './WelcomePage';

export default class setup extends Component {
	
	render() {
        let defaultName = 'WelcomePage'; 
        let defaultComponent = WelcomePage; 
         console.disableYellowBox = true;
        return ( 
            <Navigator  
                
                initialRoute={{name: defaultName, component: defaultComponent}} 
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator}/>
                
            }}/> 
        ); 
    }
}