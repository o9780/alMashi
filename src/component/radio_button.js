import { View, Text, TouchableOpacity } from 'react-native';
import Styles from '../styles';
import React ,{useState} from 'react';
import SignInLabel from './sign_in_label';
import MainTextField from './mainTextField';

const RadioButoon = () => {

    const[checked,setChecked]=useState('Now')
   
    return (
        <View style={Styles.Wrapper}>
            
            <SignInLabel stylel={[Styles.label,{left:32},checked=='Now'?{display:'none'}:"", {top:0}]}label={"Time :"} />
            <MainTextField textInput={[Styles.textInput,checked=='Now'?{display:'none'}:"", {top:-180},{width:250},{left:90},{fontSize:20},{paddingTop:40}]} type={"numeric"}/>
            <SignInLabel stylel={[Styles.label,{left:30},{top:-205}]}label={"Departure time:"}/>
            <SignInLabel stylel={[Styles.label,{left:32}, {top:-120}, ]}label={"Price :"}/>
            <MainTextField textInput={[Styles.textInput, {bottom:170} ,{width:250},{left:90},{fontSize:20},{paddingTop:40}]} type={"numeric"}/>
                    
            
                {['Now', 'Scheduled'].map(time => (
                    <View key={time} style={Styles.radioButoon}>
                        <Text style={Styles.feeling}>{time}</Text>
                        <TouchableOpacity
                            style={Styles.outter}
                            onPress={() => setChecked(time)}>
                            {checked === time && <View style={Styles.innerRadioButtonCircle} />}
                        </TouchableOpacity>
                        
                    </View>
                    

                ))}
                    
  
            
        </View>
    );
}

export default RadioButoon;