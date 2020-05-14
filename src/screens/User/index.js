import React, { useEffect } from 'react';
import { View, Text, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'

import getUserData from '@/api/getUserData.js'
import { setUserData, setAccessToken } from '@/redux/actions'
import Button from '@/components/Button'

function User({ accessToken, dispatch, userData }) {
    useEffect(() => {
        if (Object.keys(userData).length === 0 && accessToken) {
            getUserData(accessToken)
                .then( data => { dispatch(setUserData(data))} )
        }
    })



    return (
        <View style={{
            'flex': 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>
                Hello, {userData.username} 
            </Text>
            <Button 
                text='Log out'
                onPress={async () => {
                    await AsyncStorage.removeItem('accessToken'); 
                    dispatch(setAccessToken(null))
                    dispatch(setUserData({}))
                }}>

            </Button>
        </View>
    );
}

const mapStateToProps = (state) => ({
    accessToken: state.accessToken,
    userData: state.userData
})

export default connect(mapStateToProps)(User)
