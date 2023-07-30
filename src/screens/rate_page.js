import React, {useState} from 'react';
import { View,SafeAreaView, StyleSheet, Text, TouchableOpacity, Image, Dimensions,ScrollView} from 'react-native';
import Styles from '../styles';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RatePage = ({Rate ,MainButton, MainTextField, BackArrow, Bell}) =>{
return(
    <View style={{flex:1,backgroundColor:"#7CCCC4"}}>
      
    <View style={{height: "25%", backgroundColor:"#7CCCC4"}}>
      </View> 
    <View style={{flex:2 ,height: "0%", backgroundColor: '#FFFFFF', borderTopLeftRadius:50,borderTopRightRadius:50}}>
    <Image style={{width:windowWidth,height:windowHeight,position:"absolute",resizeMode:"contain",opacity:0.5}}source={require('C:/Users/o1000/Desktop/proj/src/assist/pattren.png')}/>
    <Image style={{position:'absolute', top:-130, width:100, left:150,height:110}} source={require('C:/Users/o1000/Desktop/proj/src/assist/rate_logo.png')}/>
    {Rate}
    {MainButton}
    {MainTextField}
    {BackArrow}
    {Bell}

      </View>       
  </View>
);
}
export default RatePage;