import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  ScrollView

} from 'react-native';
import Lists from './src/components/Lists';

const App = () => {
  // const [name, setName] = useState('tanzeeel');
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

const handleInput = () => {
  setNumber(number+5)
  setCount(count+1)
}

  return (

    <View style={styles.body}>
      {/* <Text style={styles.text}>{name}</Text> */}

      {/* <TextInput style={styles.input} value={name} onChangeText={setName} /> */}
      {/* <Button title='Open youtube' onPress={()=> {Linking.openURL('https://facebook.com')}}></Button> */}


      {/*Counter */}
      {/* <Text>{number}</Text>
      <Button title='add 5' onPress={handleInput}></Button>
      <Text>You clicked {count} times</Text> */}


      {/* Flexx */}
      {/* <View style={styles.row}>
      <View style={styles.view1}>
        <Text style={styles.text}>1</Text>
      </View>

      <View style={styles.view2}>
        <Text style={styles.text}>2</Text>
      </View>

      <View style={styles.view3}>
        <Text style={styles.text}>3</Text>
      </View>
      </View>

      <View style={styles.row}>
        <View style={styles.view4}>
          <Text style={styles.text}>4</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.view5}>
          <Text style={styles.text}>5</Text>
        </View>
      </View>


      <View style={styles.big_row}>
        <View style={styles.view6}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.view7}>
          <Text style={styles.text}>7</Text>
        </View>
      </View> */}




      <Lists />

    </View>

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
  row: {
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  big_row: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    margin: 10,
  },
  input: {
    backgroundColor: '#fff',
    color: '#e12'
  },
  view1: {
    flex: 1,
    backgroundColor :'#686de0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 2,
    backgroundColor: '#f9ca24',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex: 3,
    backgroundColor: '#48dbfb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view4:{
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view5: {
    flex: 1,
    backgroundColor: '#48dbfb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view6: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view7: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
