import React from 'react';
import { useState } from 'react';
import { Button, View} from 'react-native'

import Input from '@/components/Input'

import style from './style.js'

export default function Login({ navigation }) {
    const [login, loginSet] = useState('');
    // loginSet('adgsdfg');
    return (
        <View style={style.container}>

            <View style={style.form}>
                <Input 
                    value={login}
                    style={style.form__input} 
                    placeholder='Логин' 
                    textContentType='username'
                    onChangeText={text => { loginSet(text) }}
                 />
                   
                <Input 
                    style={style.form__input} 
                    placeholder='Пароль' 
                    textContentType='password' 
                    secureTextEntry={true}
                />
            </View>
            <Button 
                color='#1e90ff'
                title="Go to Home" 
                onPress={() => navigation.navigate('Home')} 
            />
        </View>
    );
}