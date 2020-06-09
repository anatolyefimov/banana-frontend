import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import {Ionicons} from '@expo/vector-icons';

import style from './style.js';

export default function Category({title, onPress}) {
    return (
        <TouchableOpacity
            style={style.Category}
            activeOpacity={0.8}
            onPress={onPress}
        >
            <Text style={style.Category__title}>
                {title}
            </Text>
            <Ionicons name='ios-arrow-forward' size={25}/>
        </TouchableOpacity>

    );
}
