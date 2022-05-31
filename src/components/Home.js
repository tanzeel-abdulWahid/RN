import React,{useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text,StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useGetStudentDataQuery } from '../services/fakeApi';
import { FlatList } from 'react-native-gesture-handler';

const Home = ({navigation}) => {

    const {data, isFetching} = useGetStudentDataQuery();
    // if(isFetching) return <Text style={styles.text}>Loading</Text>
    if(isFetching) console.log("wait");
    console.log({data});
    const {name, age} = useSelector((state) => state.data)
    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Hello {name },
                age is {age}
            </Text>

            <FlatList 
            data = {data}
            renderItem = {({item}) => (
                <View style={styles.item}>
                    <Text style={styles.title}>{item.city}</Text>
                    <Text style={styles.subtitle}>{item.name}</Text>
                </View>
            )}
            keyExtractor={(item,index) => index.toString()}
            />
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
    },
    item: {
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#cccccc',
        borderRadius: 5,
        margin: 7,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        margin: 10,
        color:'black'
    },
    subtitle: {
        fontSize: 20,
        margin: 10,
        color: '#999999',
    }
})

export default Home