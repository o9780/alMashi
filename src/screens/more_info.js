import { View, Text ,ScrollView ,StatusBar , Image ,Dimensions} from 'react-native'
import React from 'react'
import Map from '../component/map'

export default function MoreInfo({MainButton,Cards}) {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;


    StatusBar.setHidden(true);
  return (
    <View style={{flex:1}}>
        <Map/>
        
        <View style={{flex:1}}>
        <Image style={{width:400,height:400,marginTop:25,position:"absolute",resizeMode:"contain",opacity:0.5}}source={require('../assist/pattren.png')}/>
        
        </View>
        <View style={{bottom:120,flex:1}}>
        <ScrollView>
        {Cards}
        </ScrollView>
        {MainButton}
        </View>
        
        
    </View>
  )
}