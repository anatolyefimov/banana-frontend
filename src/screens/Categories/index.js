import React from 'react';
import {FlatList, SafeAreaView } from 'react-native';

import Category from '@/components/Category';

import style from './style.js';

const CATEGORY_DATA = [
    {
        id: '0',
        title: 'Брюки',
    },
    {
        id: '1',
        title: 'Рубашки',
    },
    {
        id: '2',
        title: 'Обувь',
    },

];


export default function Categories({navigation}) {
    return (
        <SafeAreaView style={style.Categories}>
            <FlatList
                data={CATEGORY_DATA}
                renderItem={({ item }) =>
                    <Category
                        title={ item.title }
                        onPress={() => navigation.navigate('Catalog', { categoryName: item.title })}
                    />
                }
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

