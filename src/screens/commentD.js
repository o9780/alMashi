import { View, Text } from 'react-native'
import React from 'react'
import MoreInfo from './more_info'
import MainButton from '../component/mainButton'
import Styles from '../styles'
import Cards from '../component/card'

export default function CommentDriver() {
  return (
    <MoreInfo
    MainButton={
        <View>
            <MainButton buttonStyle={[Styles.signButtonStyle,{top:45,width:30,right:265,fontSize:20,height:18}]}button={"Accept"}/>
            <MainButton buttonStyle={[Styles.signButtonStyle,{top:45,width:30,left:40,fontSize:20,height:18,backgroundColor:"#f45050"}]}button={"Decline"}/>
            <MainButton buttonStyle={[Styles.signButtonStyle,{top:45,width:30,right:20,fontSize:20,height:18,backgroundColor:"#f2be22"}]}button={"Edit Price"} />


        </View>
    }

    Cards={
      <View>
    <Cards card_style={Styles.card_style}/>
    <Cards card_style={Styles.card_style}/>
    <Cards card_style={Styles.card_style}/>
    <Cards card_style={Styles.card_style}/>
    <Cards card_style={Styles.card_style}/>
    </View>
  }
    >



    </MoreInfo>
  )
}