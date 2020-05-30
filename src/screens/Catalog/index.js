import React from 'react';
import {FlatList, Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import style from './style.js';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Брюки 1',
        price: '14',
        image: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Брюки 2',
        price: '14',
        image: 'https://reactnative.dev/img/tiny_logo.png'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Брюки 3',
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
    if (categoryName === 'Футболки') {
        return T_SHIRT_DATA;
    } else {
        return DATA;
    }
}

function Item({item, onPress}) {

    return (
        <View style={style.container}>
            <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
                <View style={style.container_margin}>
                    <View style={style.container_image}>
                        <Image source={{uri: item.image}} style={style.image}/>
                    </View>
                    <View style={{marginHorizontal: 5}}>
                        <Text style={style.title}>
                            {item.title}
                        </Text>
                        <View style={style.price_view}>
                            <Text style={style.price_text}>
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

function CatalogScreen({route, navigation}) {
    const {categoryName} = route.params;
    return (
        <SafeAreaView style={style.container}>
            <FlatList
                data={getDataByCategoryName({categoryName})}
                renderItem={({item}) => renderItem({item, navigation})}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

export default CatalogScreen;
