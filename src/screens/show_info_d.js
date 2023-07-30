import { View, Text } from 'react-native'
import React from 'react'
import ShowInfo from './show_info'
import MainButton from '../component/mainButton'
import AccordionInfoPass from '../component/accordion_info_pass'
import Styles from '../styles'

export default function ShowInfo_D() {
    
  return (
    
    
    <ShowInfo
    AccordionInfoPass={ <AccordionInfoPass/>}

    MainButton={<MainButton buttonStyle={[Styles.signButtonStyle, { top:-100 ,backgroundColor:"#f45050"}]} button={"Terminate"} />}
    
    
    >
      
    </ShowInfo>
    
  )
}