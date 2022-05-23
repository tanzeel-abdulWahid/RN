import React from 'react'
import {Image, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenA from '../components/ScreenA';
import ScreenB from '../components/ScreenB';

const Stack = createNativeStackNavigator();

function LogoTitle() {
    return(
        <Image source={{ uri:"https://reactjs.org/logo-og.png"}}
        style={{width:100, height:100}}/>
    )
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                
                <Stack.Screen name='ScreenA' component={ScreenA} options={{title:"Home page",
            headerStyle:{
                backgroundColor: '#f4511e'
            },
            headerTintColor:"#fff",
            headerTitleStyle:{
                fontWeight:'bold',
                
            },
            // headerShown:false,
            }}/>
                <Stack.Screen name='ScreenB' component={ScreenB} options={{headerTitle:(props) => <LogoTitle {...props}/>,
}} 
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation