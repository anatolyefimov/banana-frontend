import React from 'react';
import { Text, TouchableOpacity} from 'react-native';

export default function Button({style, text, onPress, ...props}) {
    const textColor = style ? style.color : 'white';
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
                    color: textColor,
                    fontSize: 20,
                    textAlign: 'center',
                }}
            >
                { text }
            </Text>
        </TouchableOpacity>
    );
}
