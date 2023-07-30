import {TextInput } from 'react-native'
import React from 'react'

const MainTextField=({text,textInput,type})=> {
  return (
    <TextInput style={textInput} placeholder={text} keyboardType={type}/>
  );
}

export default MainTextField;