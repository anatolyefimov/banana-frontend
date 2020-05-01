import React from 'react';
import { useState } from 'react';
import { View} from 'react-native'

import Input from '@/components/Input'
import Button from '@/components/Button'

import style from './style.js'

export default function Registration({ navigation }) {
    const [login, loginSet] = useState('');
    const [password, passwordSet] = useState('');
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
                    value={password}
                    style={style.form__input} 
                    placeholder='Пароль' 
                    textContentType='password' 
                    secureTextEntry={true}
                    onChangeText={text => { passwordSet(text) }}
                />

                <Button 
                    text="Sign up"  
                    style={style.form__button}
                />
            </View>
            <Button
                text = 'Go to the Login Page'
                style={{
                    backgroundColor: 'none',
                    color: 'dodgerblue',
                    marginTop: 10
                }}
                onPress={() => navigation.navigate('Login')} 
            />
        </View>
    );
}