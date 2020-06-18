import React from 'react';
import { useState } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import Input from '@/components/Input';
import Button from '@/components/Button';
import login from '@/api/login.js';

import style from './style.js';

function Login({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [credentialsValid, setCredentialsValid] = useState(true);

    const onSignIn = async () => {
        let accessToken = await login({
            username,
            password
        });

        if (accessToken) {
            setCredentialsValid(true);
            try {
                await AsyncStorage.setItem('accessToken', accessToken);
                // dispatch(setAccessToken(accessToken));
            } catch (e) {
                console.error(e);
            }
        } else {
            setCredentialsValid(false);
        }
    };

    return (
        <View style={style.container}>

            <View style={style.form}>
                <Input
                    value={username}
                    style={style.form__input}
                    placeholder='Логин'
                    textContentType='username'
                    onChangeText={text => { setUsername(text); }}
                />

                <Input
                    value={password}
                    style={style.form__input}
                    placeholder='Пароль'
                    textContentType='password'
                    secureTextEntry={true}
                    onChangeText={text => { setPassword(text); }}
                />

                <Button
                    text="Sign in"
                    style={style.form__button}
                    onPress={onSignIn}
                />
                <Text style = {{ color: 'red' }}>{ credentialsValid || 'Invalid username or password' }</Text>

            </View>
            <Button
                text = 'Go to the Registration'
                style={{
                    backgroundColor: 'none',
                    color: 'dodgerblue',
                    marginTop: 10
                }}
                onPress={() => navigation.navigate('Registration')}
            />
        </View>
    );
}


export default connect()(Login);
