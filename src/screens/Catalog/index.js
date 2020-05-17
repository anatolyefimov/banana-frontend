import * as React from 'react';
import {FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Constants from 'expo-constants';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

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

    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Details',
                    {
                        itemId: item.id,
                        title: item.title,
                        price: item.price,
                        image: item.image,
                    }
                )}
            >
                <View
                    style={{
                        width: wp('44%'),
                        marginHorizontal: 10,
                        marginTop: 10
                    }}
                >
                    <View
                        style={{
                            width: wp('44%'),
                            height: wp('55%'),
                            marginBottom: 10
                        }}
                    >
                        <Image
                            source={{uri: item.image}}
                            style={{
                                flex: 1,
                                width: null,
                                height: null,
                                resizeMode: 'contain'
                            }}
                        />
                    </View>
                    <View
                        style={{
                            marginHorizontal: 5
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                color: '#63CBA7',
                                fontWeight: 'bold'
                            }}
                        >
                            {item.title}
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingTop: 5
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: 'bold'
                                }}
                            >
                                ${item.price}
                            </Text>
                        </View>
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
