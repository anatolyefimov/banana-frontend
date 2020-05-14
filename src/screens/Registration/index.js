import React from 'react';
import { useState } from 'react';
import { View, Text } from 'react-native';

import Input from '@/components/Input';
import Button from '@/components/Button';
import register from '@/api/register.js';

import style from './style.js';

export default function Registration({ navigation }) {
    const [username, usernameSet] = useState('');
    const [password, passwordSet] = useState('');
    const [usernameTaken, setUsernameTaken] = useState(false);

    return (
        <View style={style.container}>
            <View style={style.form}>
                <Input
                    value={username}
                    style={style.form__input}
                    placeholder='Логин'
                    textContentType='username'
                    onChangeText={text => { usernameSet(text); }}
                />

                <Input
                    value={password}
                    style={style.form__input}
                    placeholder='Пароль'
                    textContentType='password'
                    secureTextEntry={true}
                    onChangeText={text => { passwordSet(text); }}
                />

                <Button
                    text="Sign up"
                    style={style.form__button}
                    onPress = {() => {
                        register({ username, password })
                            .then((res) => {
                                setUsernameTaken(false);
                                if (res.status === 409) {
                                    setUsernameTaken(true);
                                } else {
                                    navigation.navigate('Login');
                                }
                            });
                    }}
                />
                <Text style = {{color: 'red'}}>{ !usernameTaken || 'This username already taken' }</Text>
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
