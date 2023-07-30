import React from 'react';
import { View,StatusBar ,Image,Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const CustomPage =({MainButton,MainTextField,SignInLabel,RadioButoon,Card,LocationText,LocationText2}) =>{
    StatusBar.setHidden(true);
    return(
      <View style={{flex:1,backgroundColor:"#7CCCC4"}}>
        
        <View style={{flex:2 ,height: "0%", backgroundColor: '#FFFFFF'}}>
        <Image style={{width:windowWidth,height:windowHeight,position:"absolute",resizeMode:"contain",opacity:0.5,top:-60}}source={require('../assist/pattren.png')}/>
          {MainButton}
          {MainTextField}
          {SignInLabel}
          {RadioButoon}
          {Card}
          {LocationText}
          {LocationText2}
          
          </View>       
      </View>
      
      );
}

export default CustomPage;