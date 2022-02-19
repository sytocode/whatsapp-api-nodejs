const express = require('express');
const router = express.Router();
const instanceRoutes = require("./instance.route")
const chatRoutes = require("./chat.route")
const messageRoutes = require("./message.route")

router.get('/status', (req, res) => res.send('OK'));

router.use('/instance', instanceRoutes);
router.use('/chat', chatRoutes);
router.use('/message', messageRoutes)

module.exports = router;
