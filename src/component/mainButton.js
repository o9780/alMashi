import { View, Text ,TouchableOpacity } from 'react-native'
import React from 'react'

const MainButton=({buttonStyle,button,press})=> {
  return (
    <TouchableOpacity>
        <Text onPress={press} style={buttonStyle}>{button}</Text>
    </TouchableOpacity>
  );
}

export default MainButton;