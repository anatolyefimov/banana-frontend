import * as React from 'react';
import {View, Text, FlatList, SafeAreaView, StyleSheet, TouchableOpacity, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Constants from 'expo-constants';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        price: '14',
        image: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        price: '14',
        image: 'https://reactnative.dev/img/tiny_logo.png'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        price: '14',
        image: 'https://reactnative.dev/img/tiny_logo.png',
    },
];

function Item({item, navigation}) {
    const {
        containerStyle,
        lastItemStyle,
        imageStyle,
        textStyle,
        counterStyle,
        priceStyle
    } = styles;

    return (
        <View style={containerStyle}>
            <Image
                style={imageStyle}
                source={{uri: item.image}}
            />
            <TouchableOpacity
                onPress={() => navigation.navigate('Details', //{id, title, price, navigation}
                    {
                        itemId: item.id,
                        title: item.title,
                        price: item.price,
                        image: item.image,
                    }
                )}
            >
                {/*<Text style={styles.title}>{item.title}</Text>*/}
                <View style={textStyle}>
                    <Text style={{ color: '#2e2f30' }}>{item.title}</Text>
                    <View style={priceStyle}>
                        <Text style={{ color: '#2e2f30', fontSize: 12 }}>${item.price}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        </View>
    );
}

function rend_item({item, navigation}) {
    return (
        <Item item={item} navigation={navigation}/>
    );
}

function CategoryScreen2({navigation}) {
    // return (
    //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //         <Text>Home Screen</Text>
    //         <Button
    //             title="Go to Details"
    //             onPress={() => {
    //                 /* 1. Navigate to the Details route with params */
    //                 navigation.navigate('Details', {
    //                     itemId: 86,
    //                     otherParam: 'anything you want here',
    //                 });
    //             }}
    //         />
    //     </View>
    // );
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({item}) => rend_item({item, navigation})}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

export default CategoryScreen2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    containerStyle: {
        flexDirection: 'row',
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#e2e2e2',
        padding: 10,
        paddingLeft: 15,
        backgroundColor: '#fff'
    },
    lastItemStyle: {
        flexDirection: 'row',
        flex: 1,
        padding: 10,
        paddingLeft: 15,
        backgroundColor: '#fff'
    },
    imageStyle: {
        width: 50,
        height: 50,
        marginRight: 20
    },
    textStyle: {
        flex: 2,
        justifyContent: 'center'
    },
    priceStyle: {
        backgroundColor: '#ddd',
        width: 40,
        alignItems: 'center',
        marginTop: 3,
        borderRadius: 3
    },
    counterStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});
