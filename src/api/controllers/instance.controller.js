const { WhatsAppInstance } = require("../class/instance")
const fs = require("fs")
const path = require('path');

exports.init = async (req, res) => {
        const instance = new WhatsAppInstance();
        const data = await instance.init();
    WhatsAppInstances[data.key] = instance;
        res.json({
            error: false,
            message: "Initializing successfull",
            key: data.key
        });
}

exports.restore = async (req, res) => {

    // Restore all Instances
        const restored = [];
        const instances = fs.readdirSync(path.resolve(__dirname, '../sessiondata'));
        instances.forEach((instanceData) => {
            if (instanceData === ".gitkeep") {
                return;
            }
            const key = instanceData.split(".")[0];
            const instance = new WhatsAppInstance();
            instance.key = key;
            instance.init(instanceData);
            WhatsAppInstances[key] = instance;
            restored.push(key);
        });

        res.json({
            error: false,
            message: "All instances restored",
            instances: restored
        });
}

exports.qr = async (req, res) => {
    const instance = WhatsAppInstances[req.query.key];
    try {
        const qrcode = await instance.instance.qrcode;
        const instance_key = instance.key;
        res.render('qrcode', {
            qrcode: qrcode,
            instance_key: instance_key
        })
    } catch {
        res.json({
            qrcode: "",
        });
    }
}
