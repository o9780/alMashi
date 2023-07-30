import React from 'react';
import { View} from 'react-native';
import Home from './home_page';
import Styles from '../styles';
import MainButton from '../component/mainButton';
import SignInLabel from '../component/sign_in_label';
import OTP from '../component/OTP';

const MobileVerify=()=> {
  
  return (
    <Home
    

    
      MainButton={<MainButton buttonStyle={[Styles.signButtonStyle,{top:350}]}button={"Verify"}/>}

      SignInLabel={
                <View>
                <SignInLabel stylel={[Styles.label,{left:65,top:480}]}label={"Didn't get a code?"} style={[Styles.screen,{left:215,top:480}]} screen={"Click to resend"}/>
                <SignInLabel stylel={Styles.title_screen}label={"Verify Mobile"}/>
                <SignInLabel stylel={[Styles.title_screen,{fontSize:18},{top:40}]}label={"Please enter the verification code"}/>
              </View>
      }

      OTP={
               
                 <OTP />
               
                  } 
>

      
    

    
    </Home>  
    
  );
}




export default MobileVerify;

