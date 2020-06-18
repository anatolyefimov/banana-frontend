import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function Button({ style, text, onPress, ...props }) {

    return (
        <TouchableOpacity
            style={{
                backgroundColor: 'tomato',
                padding: 10,
                borderRadius: 5,
                ...style
            }}
            onPress={onPress}
            {...props}
        >
            <Text
                style={{
                    color: 'white',
                    fontSize: 20,
                    textAlign: 'center',
                }}
            >
                { text }
            </Text>
        </TouchableOpacity>
    );
}
