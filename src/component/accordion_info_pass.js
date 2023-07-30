import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";

const AccordionInfoPass = ()=> {
    return (
        
            
                <View style={{backgroundColor:"#fff",elevation:5,borderColor:"#6f6565",borderWidth:0.5,width:300,borderRadius:10,left:50,bottom:15}}>
                    <Collapse >
                        <CollapseHeader >
                            <View style={{height:40}}>
                               <Text style={{fontSize:23,marginLeft:50,marginTop:2}}>Passenger Info</Text> 
                            </View>
                        </CollapseHeader>
                        <CollapseBody >
                        <View >
                            <Text style={{fontSize:18,paddingBottom:7,marginLeft:70}}>Pick-up location:</Text>
                            <Text style={{fontSize:18,paddingBottom:7,marginLeft:70}}>Destination:</Text>
                            <Text style={{fontSize:18,paddingBottom:7,marginLeft:70}}>No. Passengers:</Text>
                        </View>
                        </CollapseBody>
                    </Collapse>
                </View>

               

            
        




    );
}

export default AccordionInfoPass;