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

const T_SHIRT_DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Футболка 1',
        price: '14',
        image: 'https://p7.hiclipart.com/preview/280/187/643/t-shirt-logo-product-design-stanford-joint-program-in-design-sleeve-marketing-materials.jpg',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Футболка 2',
        price: '14',
        image: 'https://banner2.cleanpng.com/20180917/fh/kisspng-t-shirt-logo-sleeve-font-5b9f416ca970b1.414162461537163628694.jpg'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Футболка 3',
        price: '14',
        image: 'https://banner2.cleanpng.com/20180917/fh/kisspng-t-shirt-logo-sleeve-font-5b9f416ca970b1.414162461537163628694.jpg',
    },
];

function getDataByCategoryName({categoryName}) {
    console.log(categoryName);
    if (categoryName === 'Футболки') {
        console.log('должен нарисовать футболку');
        return T_SHIRT_DATA;
    } else {
        console.log('хер');
        return DATA;
    }
}

function Item({item, onPress}) {

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
                <View style={styles.marginContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={{uri: item.image}} style={styles.image}/>
                    </View>
                    <View style={{marginHorizontal: 5}}>
                        <Text style={styles.title}>
                            {item.title}
                        </Text>
                        <View style={styles.priceView}>
                            <Text style={styles.priceText}>
                                ${item.price}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

function renderItem({item, navigation}) {
    return (
        <Item
            item={item}
            navigation={navigation}
            onPress={() => navigation.navigate('Details',
                {
                    itemId: item.id,
                    title: item.title,
                    price: item.price,
                    image: item.image,
                })}
        />
    );
}

function CategoryScreen2({route, navigation}) {
    const {categoryName} = route.params;
    console.log(categoryName);
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={getDataByCategoryName({categoryName})}
                renderItem={({item}) => renderItem({item, navigation})}
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
    priceText: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    priceView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5
    },
    title: {
        fontSize: 18,
        color: '#63CBA7',
        fontWeight: 'bold'
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    imageContainer: {
        width: wp('44%'),
        height: wp('55%'),
        marginBottom: 10
    },
    marginContainer: {
        width: wp('44%'),
        marginHorizontal: 10,
        marginTop: 10
    },
});
