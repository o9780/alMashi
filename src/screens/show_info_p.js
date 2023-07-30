import { View, Text } from 'react-native'
import React from 'react'
import ShowInfo from './show_info'
import MainButton from '../component/mainButton'
import AccordionInfoCar from '../component/accordion_info_car'
import Styles from '../styles'

export default function ShowInfo_P() {
    
  return (
    
    
    <ShowInfo
    AccordionInfoCar={ <AccordionInfoCar/>}

    MainButton={<MainButton buttonStyle={[Styles.signButtonStyle, { top:-100 ,backgroundColor:"#f45050"}]} button={"Cancel"} />}
    
    
    >
      
    </ShowInfo>
    
  )
}