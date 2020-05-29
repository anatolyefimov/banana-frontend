import Constants from 'expo-constants';

async function register(data) {
    let res = await fetch(`${Constants.manifest.extra.banana_ip}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const status = res.status;

    res = await res.json();
    res.status = status;

    return res;
}

export default register;
