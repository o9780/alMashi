import React from 'react';
import { View,StatusBar ,Image,Dimensions} from 'react-native';





const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
StatusBar.setHidden(true);





const Edit_temp = ({MainTextField,SignInLabel, MainButton,Dropdown,Img}) =>{
    return (
      <View style={{flex:1,backgroundColor:"#7CCCC4"}}>


                 <View style={{height: "15%", backgroundColor:"#7CCCC4"}}>

                    

                 </View>

                 <View style={{flex:2 ,height: "0%", backgroundColor: '#FFFFFF', borderTopLeftRadius:50,borderTopRightRadius:50}}>
                   <Image style={{width:windowWidth,height:windowHeight,position:"absolute",resizeMode:"contain",opacity:0.5, marginTop: 60}}source={require('../assist/pattren.png')}/>
                   {MainTextField}
                   {MainButton}
                   {SignInLabel}
                   {Dropdown}
                   {Img}
                 </View>

                 </View>
      );
}

export default Edit_temp;