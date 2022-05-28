import React from 'react'
import {Image, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenA from '../components/ScreenA';
import ScreenB from '../components/ScreenB';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon:({focused, size, color}) => {
                    let iconName;
                    if(route.name === "ScreenA"){
                        iconName = 'autoprefixer';
                        size = focused ? 25 : 20;
                        color = focused ? '#f0f' : '#555';
                    }else if(route.name === "ScreenB"){
                        iconName = "btc";
                        size = focused ? 25 : 20;
                        color = focused ? '#f0f' : '#555';
                    }
                    return(
                        <FontAwesome5 
                        name={iconName}
                        size={size}
                        color={color}/>
                    )
                },
                    activeTintColor: '#f0f',
                    inactiveTintColor: '#555',
                    tabBarActiveBackgroundColor:'black'
            })}
            >
                
                <Tab.Screen name='ScreenA' component={ScreenA}/>
                <Tab.Screen name='ScreenB' component={ScreenB} />
                
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation