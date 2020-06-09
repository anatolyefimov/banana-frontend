import React from 'react';
import {Image, Text, TouchableOpacity, View } from 'react-native';

import style from './style.js';

export default function Product({data, onPress}) {
    return (
        <TouchableOpacity
            style={style.Product}
            activeOpacity={0.8}
            onPress={onPress}
        >
            <Image source={{uri: data.image}}  style={style.Product__image}/>

            <View style={style.Product__info}>
                <Text style={style.Product__title}>
                    {data.title}
                </Text>
                <Text style={style.Product__price}>
                    {data.price} ₽
                </Text>
            </View>

        </TouchableOpacity>
    );
}
