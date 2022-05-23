import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  ScrollView

} from 'react-native';
// import Lists from './src/components/Lists';
import Navigation from './src/config/navigation';

const App = () => {

  return (

    <Navigation />

  );
};

const styles = StyleSheet.create({
  body:{
    flex:1,
    // flexDirection: 'column',
    // alignItems: 'center',
    backgroundColor:'#4b4b4b',
    // justifyContent: 'flex-start',
  },
});

export default App;
