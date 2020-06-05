import React from 'react';
import {Image, ScrollView, Text, SafeAreaView, View} from 'react-native';

import Button from '@/components/Button'

import style from './style.js';

function Details({route, navigation}) {
    const {itemId, title, price, image} = route.params;

    return (
        <ScrollView>
            <View style={style.Details}>
                <Image source={{uri: image}} style={style.Details__image} />
                <Text style={style.Details__title}>{title}</Text>
                <Text style={style.Details__price}>{price} ₽</Text>
                <Button style={style.Details__toBasket} text='В корзину'/>
            </View>
        </ScrollView>
    );
}

export default Details;
