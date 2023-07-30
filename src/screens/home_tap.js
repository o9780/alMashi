import React from 'react';
import { View, StatusBar, Image, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Initiate from '../screens/initiate_page';
import DefaultHome from '../screens/default_home_page';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Tab = createMaterialTopTabNavigator();


const HomeTap = ({ MainButton, MainTextField, SignInLabel, RadioButoon, Card, LocationText, LocationText2 }) => {
    StatusBar.setHidden(true);
    return (
        <View style={{ backgroundColor: "#7CCCC4" }}>

            <View style={{height: "100%", backgroundColor: "#7CCCC4" }}>
            
            <NavigationContainer >
                        <Tab.Navigator style={{top:150,height:200}}>
                            <Tab.Screen name="Reserve Ride" component={DefaultHome}  />
                            <Tab.Screen name="Initate Ride" component={Initiate} />
                        </Tab.Navigator>
                    </NavigationContainer>
                    {MainButton}
                {MainTextField}
                {SignInLabel}
                {RadioButoon}
                {Card}
                {LocationText}
                {LocationText2}
            </View>
            

            </View>
    

    );
}

export default HomeTap;