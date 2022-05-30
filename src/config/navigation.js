import React from 'react'
import {Image, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../components/Login';
import Home from '../components/Home';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerTitleAlign:'center',
                headerStyle:{
                    backgroundColor: '#0080ff'
                },
                headerShown:false,
                headerTintColor:'#ffffff',
                headerTitleStyle:{
                    fontSize:25,
                    fontWeight:'bold'
                }
            }}
            >
                
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='Home' component={Home} />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation