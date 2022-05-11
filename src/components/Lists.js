import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    RefreshControl,
    View,
    ScrollView

} from 'react-native';

const Lists = () => {

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        items.some(e => {
            if (e.key == 69 && e.item == 'tanzeeeel') {
                setItems([...items]);
                setRefreshing(false);
            }else{
                setItems([...items,{key:69, item:'tanzeeeel'}])
                setRefreshing(false);

            };
        })
        }

    const [items, setItems] = useState([
        {key:1, item: 'Item1'},
        { key: 2, item: 'Item 2' },
        { key: 3, item: 'Item 3' },
        { key: 4, item: 'Item 4' },
        { key: 5, item: 'Item 5' },
        { key: 6, item: 'Item 6' },
        { key: 7, item: 'Item 7' },
        { key: 8, item: 'Item 8' },
        { key: 44, item: 'Item 9' },
        { key: 68, item: 'Item 27' },
        { key: 0, item: 'Item 78' },
    ]);
    return(
        <ScrollView
        
        refreshControl={<RefreshControl
        refreshing={refreshing}
        onRefresh ={onRefresh}
        />}
        >
            {items.map((obj) => (
                <View key={obj.key} style={styles.item}>
                    <Text style={styles.text}>
                        {obj.item}
                    </Text>
                </View>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    },
    item: {
        margin: 10,
        backgroundColor: '#4ae1fa',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#000000',
        fontSize: 45,
        fontStyle: 'italic',
        margin: 10,
    },
})

export default Lists;