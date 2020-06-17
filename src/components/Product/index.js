import React from 'react';
import {Image, Text, TouchableOpacity, View } from 'react-native';

import style from './style.js';

export default function Product({data, horisontal, onPress}) {
    let styleProduct = style.Product;
    let styleImage = style.Product__image;
    if (horisontal) {
        styleProduct = {
            ...styleProduct,
            ...style.Product_horizontal
        }
        styleImage = {
            ...styleImage,
            ...style.Product__image_horizontal
        }
    }

    return (
        <TouchableOpacity
            style={styleProduct}
            activeOpacity={0.8}
            onPress={onPress}
        >
            <Image source={{uri: data.image}}  style={styleImage}/>

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
