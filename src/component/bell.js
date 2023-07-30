import React from 'react';
import { TouchableOpacity, Image, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Bell =({style})=>{
    return(

<TouchableOpacity>
<Image style={style}source={require('C:/Users/o1000/Desktop/proj/src/assist/bell.png')}/>
</TouchableOpacity>
    );
}
export default Bell;