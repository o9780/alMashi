import { View } from 'react-native'
import React  from 'react'
import Styles from '../styles';
import Card from '../component/card';
import CustomPage from './custom_page';


const DefaultHome=()=> {
  return (
    <CustomPage
    Card={<Card card_style={[Styles.card_style,{top:40}]}/>}


  />
  )
}

export default DefaultHome;