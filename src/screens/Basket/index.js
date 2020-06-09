import React from 'react';
import { connect } from 'react-redux';
import {View, Text, SafeAreaView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import style from './style.js';

function Basket({basket}) {

    if (Object.keys(basket).length === 0) {
        return (
            <SafeAreaView style={style.EmptyBasket}>
                <Ionicons name='md-basket' style={style.EmptyBasket__image} />
                <Text style={style.EmptyBasket__text}>Корзина пуста</Text>
            </SafeAreaView>
        );
    }
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>
                В корзине {Object.keys(basket).length} товаров.
            </Text>

        </View>
    );


}

const mapStateToProps = (state) => ({
    basket: state.anonymousBasket
});

export default connect(mapStateToProps)(Basket);
