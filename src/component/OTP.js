import {StyleSheet} from 'react-native'
import React from 'react'
import OTPInputView from '@twotalltotems/react-native-otp-input'

const OTP=()=> {
  return (
    
      <OTPInputView
    style={{top:"30%",width:"70%",justifyContent:"center",alignSelf:"center",position:"absolute"}}
    pinCount={4}
    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
    // onCodeChanged = {code => { this.setState({code})}}
    autoFocusOnLoad
    codeInputFieldStyle={[styles.borderStyleBase,{borderColor:"#6f6565",borderWidth:0.75}]}
    codeInputHighlightStyle={[styles.underlineStyleHighLighted,{borderColor:"#7cccc4",borderWidth:2}]}
    onCodeFilled = {(code => {
        console.log(`Code is ${code}, you are good to go!`)
    })}
/>
    
  );
}

export default OTP;

const styles = StyleSheet.create({
    borderStyleBase: {
      width: 20,
      height: 45,
      color:"black",
    },
  
    underlineStyleHighLighted: {
     borderColor: "#7cccc4",
  
      color:"black",
      
    },
  });