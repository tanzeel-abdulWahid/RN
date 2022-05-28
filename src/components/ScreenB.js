import React from 'react'
import { StyleSheet, View, Text,Pressable, Button } from "react-native";
import GlobalStyles from '../utils/GlobalStyles';

const ScreenB = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{color:"black"}}>New Screen</Text>


            
            <Pressable style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
            
                onPress={() => navigation.navigate('ScreenA')}
            >
                    <Text style={[Styles.text, GlobalStyles.CustomFont]}>
                        go to screen A
                    </Text>
            </Pressable>

        </View>
    )
}

export default ScreenB

const Styles = StyleSheet.create({
    text: {
        fontSize: 60,
        color:'black',
        // fontWeight: 'bold',
        margin: 10,
    }
})