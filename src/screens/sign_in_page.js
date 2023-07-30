import React from 'react';
import { View} from 'react-native';
import MainPageSign from './main_page_sign';
import Styles from '../styles';
import MainButton from '../component/mainButton';
import MainTextField from '../component/mainTextField';
import SignInLabel from '../component/sign_in_label';

const SignIn=()=> {
  
  return (
    <MainPageSign
    

    
      MainButton={<MainButton buttonStyle={[Styles.signButtonStyle,{top:410}]}button={"Sign in"}/>}

      SignInLabel={
                <View>
                <SignInLabel stylel={[Styles.label,{left:77}]}label={"Don't have an account?"} style={[Styles.screen,{left:270}]} screen={"Sign Up"}/>
                <SignInLabel stylel={Styles.title_screen}label={"Welcome Back"}/>
                <SignInLabel stylel={[Styles.title_screen,{fontSize:18},{top:40}]}label={"Please fill the information below"}/>
              </View>
      }

      MainTextField={
               
                 <MainTextField textInput={[Styles.textInput,{marginTop:"40%"}]} text={"Mobile No."} type={"numeric"}/>
               
                  } 
>

      
    

    
    </MainPageSign>  
    
  );
}




export default SignIn;

