import React from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import style from './style.js';

const CATEGORY_DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Брюки',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2sba',
        name: 'Футболки',
    },
];

function renderCategory({item, navigation}) {
    return (
        <View style={style.container}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Catalog', {categoryName: item.name})}>
                <View style={{marginHorizontal: 5}}>
                    <Text style={style.title}>
                        {item.name}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

function Categories({navigation}) {
    return (
        <SafeAreaView style={style.container}>
            <FlatList
                data={CATEGORY_DATA}
                renderItem={({item}) => renderCategory({item, navigation})}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

export default Categories;
