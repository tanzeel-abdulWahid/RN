import React from 'react'
import { StyleSheet, View, Text,Pressable, Button } from "react-native";

const ScreenB = ({route,navigation}) => {
    const {itemId, otherDetails} = route.params;
    // console.log({itemId});
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{color:"black"}}>New Screen</Text>
            
            <Text style={{ color: "black" }}>Item id {JSON.stringify(itemId)}</Text>
            <Text style={{ color: "black" }}>{otherDetails}</Text>

            
            <Pressable style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
            
                onPress={() => navigation.navigate('ScreenB',{
                    itemId:90,
                })}
            >
                    <Text style={Styles.text}>
                        Go to screen B again
                    </Text>
            </Pressable>

            <Button title="Change Prop" onPress={() => navigation.setParams({otherDetails: 'tanzeel'})}/>

            <Button title='go to Screen A' onPress={() => navigation.navigate("ScreenA")} />

            <Button title='go back' onPress={() => navigation.goBack()}/>


        </View>
    )
}

export default ScreenB

const Styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
    }
})