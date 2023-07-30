import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";

const AccordionInfoCar = ()=> {
    return (
        
            
                <View style={{backgroundColor:"#fff",elevation:5,borderColor:"#6f6565",borderWidth:0.5,width:300,borderRadius:10,left:50,bottom:15}}>
                    <Collapse >
                        <CollapseHeader >
                            <View style={{height:40}}>
                               <Text style={{fontSize:23,marginLeft:50,marginTop:2}}>Car Info</Text> 
                            </View>
                        </CollapseHeader>
                        <CollapseBody >
                        <View >
                            <Text style={{fontSize:18,paddingBottom:7,marginLeft:70}}>Plate No.:</Text>
                            <Text style={{fontSize:18,paddingBottom:7,marginLeft:70}}>Class:</Text>
                            <Text style={{fontSize:18,paddingBottom:7,marginLeft:70}}>Capacity:</Text>
                            <Text style={{fontSize:18,paddingBottom:7,marginLeft:70}}>Type:</Text>
                            <Text style={{fontSize:18,paddingBottom:7,marginLeft:70}}>Color:</Text>

                        </View>
                        </CollapseBody>
                    </Collapse>
                </View>

               

            
        




    );
}

export default AccordionInfoCar;