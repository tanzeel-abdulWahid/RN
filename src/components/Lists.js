import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    RefreshControl,
    View,
    ScrollView,
    SectionList,
    FlatList

} from 'react-native';

const Lists = () => {

    const [refreshing, setRefreshing] = useState(false);

    const [Sections, setSections] = useState([
        {
            title: 'Title 1',
            data: ['Item 1-1', 'Item 1-2'],
        },
    ]);

    // const [items, setItems] = useState([
    //     {key:1, item: 'Item1'},
    //     { key: 2, item: 'Item 2' },
    //     { key: 3, item: 'Item 3' },
    //     { key: 4, item: 'Item 4' },
    //     { key: 5, item: 'Item 5' },
    //     { key: 6, item: 'Item 6' },
    //     { key: 7, item: 'Item 7' },
    //     { key: 8, item: 'Item 8' },
    //     { key: 44, item: 'Item 9' },
    //     { key: 68, item: 'Item 27' },
    //     { key: 0, item: 'Item 78' },
    // ]);


    //for flat list
    // const [items, setItems] = useState([
    //     { name: 'Item 1' },
    //     { name: 'Item 2' },
    //     { name: 'Item 3' },
    //     { name: 'Item 4' },
    //     { name: 'Item 5' },
    //     { name: 'Item 6' },
    //     { name: 'Item 7' },
    //     { name: 'Item 8' },
    //     { name: 'Item 9' },
    //     { name: 'Item 27' },
    //     { name: 'Item 78' },
    // ]);

    // for section List
    const DATA = [
        {
            title: "Main dishes",
            data: ["Pizza", "Burger", "Risotto"]
        },
        {
            title: "Sides",
            data: ["French Fries", "Onion Rings", "Fried Shrimps"]
        },
        {
            title: "Drinks",
            data: ["Water", "Coke", "Beer"]
        },
        {
            title: "Desserts",
            data: ["Cheese Cake", "Ice Cream"]
        }
    ];



    return (
        // <ScrollView

        // refreshControl={<RefreshControl
        // refreshing={refreshing}
        // onRefresh ={onRefresh}
        // />}
        // >
        //     {items.map((obj) => (
        //         <View key={obj.key} style={styles.item}>
        //             <Text style={styles.text}>
        //                 {obj.item}
        //             </Text>
        //         </View>
        //     ))}
        // </ScrollView>

        // <FlatList
        // // horizontal
        // keyExtractor={(item, index) => index.toString()}
        // data={items}
        // renderItem={({item}) => (
        //     <View style={styles.item}>
        //         <Text style={styles.text}>{item.name}</Text>
        //     </View>
        // )}
        //     refreshControl={
        // <RefreshControl
        //     refreshing={refreshing}
        //     onRefresh={onRefresh}
        //     colors={['#ff00ff']}
        // />
        // }
        // />

        <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item+index}
        renderItem={({item}) => (
            <View style={styles.item}>
                <Text style={styles.text}>{item}</Text>
            </View>
        )}
        renderSectionFooter={({section}) => (
            <Text style={styles.text}>{section.title}</Text>

        )}
        renderSectionHeader={({section}) => (
            <Text style={styles.text}>{section.title}</Text>
        )}
        />

    )
}
const styles = StyleSheet.create({
    body: {
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