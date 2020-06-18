import React from 'react';
import { TextInput } from 'react-native';

export default function Input({ value, style, onChangeText, ...props }) {
    return (
        <TextInput
            value={value}
            style={{
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 5,
                padding: 10,
                fontSize: 20,
                ...style
            }}
            onChangeText={onChangeText}
            {...props}
        />
    );
}
