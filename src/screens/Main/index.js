import React from 'react';
import { View, Text } from 'react-native';
import Constants from 'expo-constants';

function MainScreen() {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Главная страница {Constants.manifest.extra.banana_ip}</Text>
            <Text>тут будут акции, скидки</Text>
        </View>
    );
}

export default MainScreen;
