import React from 'react';
import { View,StatusBar ,Image,Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home =({MainButton,MainTextField,SignInLabel,RadioButoon,Card,LocationText,LocationText2,MyTabs,OTP}) =>{
    StatusBar.setHidden(true);
    return(
      <View style={{flex:1,backgroundColor:"#7CCCC4"}}>
      
        <View style={{height: "25%", backgroundColor:"#7CCCC4"}}>


          </View> 
        <View style={{flex:2 ,height: "0%", backgroundColor: '#FFFFFF', borderTopLeftRadius:50,borderTopRightRadius:50}}>
        <Image style={{width:windowWidth,height:windowHeight,position:"absolute",resizeMode:"contain",opacity:0.5}}source={require('../assist/pattren.png')}/>
          {MainButton}
          {MainTextField}
          {SignInLabel}
          {RadioButoon}
          {Card}
          {LocationText}
          {LocationText2}
          {MyTabs}
          {OTP}
          </View>       
      </View>
      
      );
}

export default Home;