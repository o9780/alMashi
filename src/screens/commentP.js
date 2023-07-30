import { View, Text ,Alert} from 'react-native'
import React from 'react'
import MoreInfo from './more_info'
import MainButton from '../component/mainButton'
import Styles from '../styles'
import Cards from '../component/card'

export default function CommentPassenger() {
  return (
    <MoreInfo
    MainButton={
        <View>
            <MainButton buttonStyle={[Styles.signButtonStyle,{top:45,width:30,right:220,fontSize:20,height:18}]}button={"Request"} press={()=>Alert.alert("Warning","If your location is far from the driver,\nadditional fees will apply")}/>
            <MainButton buttonStyle={[Styles.signButtonStyle,{top:45,width:30,left:100,fontSize:20,height:18,backgroundColor:"#f45050"}]}button={"Decline"}/>

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