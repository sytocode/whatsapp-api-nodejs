
exports.send = async (req, res) => {
    const instance = WhatsAppInstances[req.query.key];

    let id = req.query.id;

    const jid = id + '@s.whatsapp.net' // can also be a group

    try {
        const sentMsg = await instance.instance.conn.sendMessage(jid, {text: req.query.message})
        if (sentMsg.error) return res.status(404).json(sentMsg)

        res.status(201).json({
            error: false,
            data: sentMsg
        });
    } catch (e) {
        res.status(403).json({
            error: true,
            data: e
        });
    }
}
