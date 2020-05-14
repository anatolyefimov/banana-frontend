import React from 'react';
import {View, Text} from 'react-native';

function Basket() {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Корзина</Text>
            <Text>тут будут выбранные товары и кнопка оплатить</Text>
        </View>
    );
}

export default Basket;
