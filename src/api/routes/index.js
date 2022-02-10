const express = require('express');
const router = express.Router();
const instanceRoutes = require("./instance.route")
const chatRoutes = require("./chat.route")

router.get('/status', (req, res) => res.send('OK'));

router.use('/instance', instanceRoutes);
router.use('/chat', chatRoutes);

module.exports = router;
