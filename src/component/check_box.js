import { View, Text } from 'react-native'
import React from 'react'
import CheckBox from '@react-native-community/checkbox';

const Check_box=({style_box,style_text_box,label,value,fun})=> {
  
  
    
  return (
    <View>
        <Text style={style_text_box}>{label}</Text>
        <CheckBox
        value={value}
        onValueChange={fun}
        style={style_box}
     />
     </View>
  );

}

export default Check_box;