import os from 'os';

const ni = os.networkInterfaces()

export default {
    extra: {
        banana_ip:  ni.en0 ? `http://${ni.en0[1].address}:5000` : `http://${ni.eth0[0].address}:5000`
    },
};
