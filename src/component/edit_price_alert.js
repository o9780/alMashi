import { View, Text ,TextInput,TouchableOpacity,Image } from 'react-native'
import React from 'react'

export default function EditPriceAlert() {
  return(
    <View style={{flex:1}}>
    <View style={{backgroundColor:'white',width:350, height:180, borderRadius:10, left:24, top:250, borderColor:'black', borderWidth:0.3, elevation:9}}>
      <Text style={{fontSize:25,left:50, top:21}}>Enter the new price: </Text>
      <TextInput style={{ top:30, width:250, left:40, borderWidth:0.2, borderRadius:6, height:40}} keyboardType="numeric"></TextInput>
      <TouchableOpacity style={{backgroundColor:"#22A699", width:90, top:60, left:60, height:30, borderRadius:10}}>
        <Text style={{left:24, top:1, fontSize:20, color:'white'}}>Send</Text>
        </TouchableOpacity>
    
        <TouchableOpacity style={{backgroundColor:"#F45050", width:90, top:30, left:180, height:31, borderRadius:10}}>
           <Text style={{left:15, top:1, fontSize:20, color:'white'}}>Cancle</Text>
        </TouchableOpacity>
      </View>
    
    <View style={{flex:1}}>
    <Image style={{width:400,height:400,marginTop:145,position:"absolute",resizeMode:"contain",opacity:0.5}}source={require('../assist/pattren.png')}/>
    
    </View>
    
    
    
</View>
    
      
    );
}

    