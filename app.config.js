const os = require('os')

export default {
    extra: {
        banana_ip:  `http://${os.networkInterfaces().en0[1].address}:5000`
    },
};