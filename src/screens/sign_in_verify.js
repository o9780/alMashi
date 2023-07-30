import React from 'react';
import { View} from 'react-native';
import MainPageSign from './main_page_sign';
import Styles from '../styles';
import MainButton from '../component/mainButton';
import SignInLabel from '../component/sign_in_label';
import OTP from '../component/OTP';

const SignInVerify=()=> {
  
  return (
    <MainPageSign
    

    
      MainButton={<MainButton buttonStyle={[Styles.signButtonStyle,{top:410}]}button={"Verify"}/>}

      SignInLabel={
                <View>
                <SignInLabel stylel={[Styles.label,{left:65}]}label={"Didn't get a code?"} style={[Styles.screen,{left:215}]} screen={"Click to resend"}/>
                <SignInLabel stylel={Styles.title_screen}label={"Verify Mobile"}/>
                <SignInLabel stylel={[Styles.title_screen,{fontSize:18},{top:40}]}label={"Please enter the verification code"}/>
              </View>
      }

      OTP={
               
                 <OTP />
               
                  } 
>

      
    

    
    </MainPageSign>  
    
  );
}




export default SignInVerify;

