import { View,Image,Dimensions} from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native';

const windowWidth = Dimensions.get('window').width;
StatusBar.setHidden(true);


const MainPageSign =({MainButton,MainTextField,SignInLabel,Check_box,OTP,Dropdown})=> {
  return (

    <View style={{flex:1}}>

        <View style={{height: "20%"}}>
          <Image style={{width:windowWidth,height:"150%",resizeMode:"cover",position:"absolute"}}source={require('../assist/uppattren.png')}/>
        </View>

        <View style={{flex:2 ,height: "0%", backgroundColor: '#FFFFFF', borderTopLeftRadius:50,borderTopRightRadius:50,borderTopColor:"black",borderWidth:1}}>
          {SignInLabel}
          {MainTextField}
          {MainButton}
          {Check_box}
          {OTP}
          {Dropdown}
          
        </View>       
      </View>
  );
}


export default MainPageSign;