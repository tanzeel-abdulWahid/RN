import React from 'react';
import { Pressable } from 'react-native';
import {StyleSheet,View , Text} from "react-native";

const ScreenA = ({ navigation }) => {

    const onPressHandler = () => {
        navigation.navigate('ScreenB');
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'black', fontSize: 30, fontFamily:'BebasNeue-Regular'}}>Home Screen</Text>

            <Pressable 
            onPress={onPressHandler}
            style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>

            <Text style={Styles.text}>
                Go to screen B
            </Text>
            </Pressable>
        </View>
    )
}

export default ScreenA

const Styles = StyleSheet.create({
    text:{
        fontSize: 50,
        // fontWeight:'bold',
        margin: 10,
        fontFamily:'BebasNeue-Regular',

    }
})
