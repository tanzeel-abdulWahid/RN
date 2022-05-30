import React,{useState, useEffect} from 'react'
import {View,TextInput, Text, StyleSheet, Alert} from 'react-native';
import CustomButton from '../utils/CustomButton';
import { useSelector,useDispatch } from 'react-redux';
import { setName,setAge } from '../features/data/dataSlice';

const Login = ({navigation}) => {
    const [names, setNames] = useState('');
    const [ages, setAges] = useState('');

    const dispatch = useDispatch();


    useEffect(() => {
        getData();
    }, [])
    

    const getData = () => {
        try{
            console.log("aaaa");
        }
        catch(err){
            console.log(err);
        }
    }

    const setData = async() => {

        if(names.length == 0){
            Alert.alert("Warning", 'Please write your name');
        }else{
            try{
                dispatch(setName(names));
                dispatch(setAge(ages));
                navigation.navigate('Home');
            }catch(error){
                console.log(error);
            }
        }
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Async Storage
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                onChangeText={(value) => setNames(value)} />
            <TextInput
                style={styles.input}
                placeholder="Enter your age"
                onChangeText={(value) => setAges(value)} />
            <CustomButton 
                title="Login"
                color="#1eb900"
                onPressFunction={setData}/>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        alignItems: 'center',
        backgroundColor: '#0080ff',
    },
    text:{
        fontSize:30,
        color:'#ffffff',
        marginTop:30,
        marginBottom:130,
    },
    input:{
        color:'black',
        width:300,
        borderWidth:1,
        borderColor: '#555',
        borderRadius:10,
        backgroundColor: '#ffffff',
        textAlign:'center',
        fontSize:20,
        marginBottom:10,
    }
})

export default Login