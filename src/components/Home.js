import React,{useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text,StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const Home = ({navigation}) => {

    const {name, age} = useSelector((state) => state.data)
    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Hello {name}
                age is {age}
            </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    body:{
        flex:1,
        alignItems:'center',
    },
    text:{
        color:'black',
        fontSize:40,
        margin:10,
    }
})

export default Home