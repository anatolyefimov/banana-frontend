import Constants from 'expo-constants';

async function getUserData(accessToken) {
    let res = await fetch(`${Constants.manifest.extra.host}/get_user_data`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            accessToken
        })
    })

    let text = await res.text()
    console.log(text)
    res = JSON.parse(text);
   
    return res;
}

export default getUserData;