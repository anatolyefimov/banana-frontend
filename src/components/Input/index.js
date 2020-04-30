import React from 'react';
import { TextInput } from 'react-native';

export default function Input({value, style, onChangeText, ...props}) {
  return (
    <TextInput
        value={value}
        style={{
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 3,
            ...style
        }}
        onChangeText={onChangeText}
        {...props}
    />
  );
}