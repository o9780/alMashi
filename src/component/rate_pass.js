import React from "react";
import Rate from "./rate";
import MainButton from "./mainButton";
import MainTextField from "./mainButton";
import BackArrow from "./arrow";
import Bell from "./bell";
import { StatusBar } from "react-native";
import RatePage from "../screens/rate_page";
import Styles from "../styles";



const App = () => {
    StatusBar.setHidden(true);
  return(
    <RatePage 
    Rate={<Rate st={Styles.text} text={"Rate Passenger"}/>}
    MainButton={<MainButton buttonStyle={[Styles.signButtonStyle,{top:400},{right:103}]}button={"Submit"}/>}
     MainTextField ={<MainTextField textInput={[Styles.textInput,{backgroundColor:"green"}]} />}
    BackArrow={<BackArrow style={{resizeMode:"contain",opacity:0.9,width:30,bottom:400,left:10}}/>}
    Bell={<Bell style={{opacity:0.9, bottom:660, width:30, left:353,height:30}}/>}
  />
  );
  }
  export default App;