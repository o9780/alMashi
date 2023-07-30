import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import About from './About';
import Privacy from './Privacy';
import { Button, Text } from 'react-native';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const Sidebar = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator  useLegacyImplementation={false} drawerContent={(props) => <CustomDrawer {...props}/>} >
                
                <Drawer.Screen
                    key='home'
                    name='Home'
                    component={Home} />
                <Drawer.Screen
                    key='about'
                    name='About'
                    component={About} />
                <Drawer.Screen
                    key='privacy'
                    name='Privacy'
                    component={Privacy} />
               
                    
                    
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Sidebar;
