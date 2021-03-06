import Constants from 'expo-constants';

async function fetchUserData(accessToken) {
    let res = await fetch(`${Constants.manifest.extra.banana_ip}/get_user_data`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            accessToken
        })
    });

    res = await res.json();

    return res;
}

export default fetchUserData;
