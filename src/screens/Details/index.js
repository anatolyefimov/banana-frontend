import React from 'react';
import {Button, Image, ScrollView, Text, View} from 'react-native';

import style from './style.js';

function Details({route, navigation}) {
    const {itemId} = route.params;
    const {title} = route.params;
    const {price} = route.params;
    const {image} = route.params;

    return (
        <View style={{flex: 1}}>
            <ScrollView>
                <View style={style.container_image}>
                    <Image source={{uri: image}} style={style.image}/>
                </View>
                <Text>id: {itemId}</Text>
                <Text>name: {title}</Text>
                <Text>price: ${price}</Text>
                <Text>image: {image}</Text>
                <Button title="Go to list of categories" onPress={() => navigation.navigate('Categories')}/>
                <Button title="Go back" onPress={() => navigation.goBack()}/>
            </ScrollView>
        </View>
    );
}

export default Details;
