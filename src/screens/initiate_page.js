import { View ,Alert} from 'react-native'
import React  from 'react'
import MainButton from '../component/mainButton';
import Styles from '../styles';
import RadioButoon from '../component/radio_button';
import CustomPage from './custom_page';
 

const Initiate=()=> {
  return (
    <CustomPage 
    MainButton={<MainButton buttonStyle={[Styles.signButtonStyle,{top:350 ,right:103}]}button={"Initiate"}/>}
    
  RadioButoon={<RadioButoon/>}
  />
  )
}

export default Initiate;