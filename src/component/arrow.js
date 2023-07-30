import React from 'react';
import {TouchableOpacity, Image, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BackArrow =({style})=>{
    return(

<TouchableOpacity>
<Image style={style}source={require('C:/Users/o1000/Desktop/proj/src/assist/arrow_logo.png')}/>
</TouchableOpacity>
    );
}
export default BackArrow;