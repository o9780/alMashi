import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Initiate from './initiate_page';
import DefaultHome from './default_home_page';
import { View } from 'react-native';
import LocationText from '../component/location_text';
import LocationText2 from './location_text2';

const Tab = createMaterialTopTabNavigator();


const MyTabs=()=> {
  return (
    
    <View style={{flex:1,backgroundColor:"#7CCCC4"}}>
      <View style={{flex:0.1}}>
      <LocationText/>
      <LocationText2/>
    </View>
<NavigationContainer >
                        <Tab.Navigator  style={{top:120 ,borderTopLeftRadius:50,borderTopRightRadius:50}}>
                            <Tab.Screen name="Reserve Ride" component={DefaultHome}  />
                            <Tab.Screen name="Initate Ride" component={Initiate} />
                        </Tab.Navigator>
                    </NavigationContainer>
                    </View>
  );
}

export default MyTabs;