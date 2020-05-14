import Constants from 'expo-constants';

async function login(data) {
    try {
        let res = await fetch(`${Constants.manifest.extra.host}/login`, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        res = await res.json();

        return res.access_token;
    }
    catch (e) {
        console.error(e);
    }


}

export default login;
