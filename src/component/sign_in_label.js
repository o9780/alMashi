import { View, Text ,TouchableOpacity  } from 'react-native'
import React from 'react'

const SignInLabel=({stylel,label,screen,style})=> {
  return (
    <View>
      <Text style={stylel} >{label}</Text>
      <TouchableOpacity>
        <Text style={style}>{screen}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignInLabel;