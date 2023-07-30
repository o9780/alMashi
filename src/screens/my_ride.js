import { View, Text } from 'react-native'
import React from 'react'
import Home from './home_page'
import Card from '../component/card'
import SignInLabel from '../component/sign_in_label'
import Styles from '../styles'

export default function MyRide() {
  return (
    
    <Home

    SignInLabel={
        <SignInLabel stylel={[Styles.title_screen,{top:-100,fontSize:40,color:"#fff"}]}label={"My Rides"}/>
    }
    
    Card={<Card/>}
    >
      
        
      
    </Home>
  )
}