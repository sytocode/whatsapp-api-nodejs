const express = require('express');
const controller = require('../controllers/chat.controller');

const router = express.Router();
router.route('/send').get(controller.send);

module.exports = router;
