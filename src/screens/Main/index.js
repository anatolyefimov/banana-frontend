import React from 'react';
import {View, Text} from 'react-native';

function MainScreen() {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Главная страница</Text>
            <Text>тут будут акции, скидки</Text>
        </View>
    );
}

export default MainScreen;
