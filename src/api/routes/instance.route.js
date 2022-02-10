const express = require('express');
const controller = require('../controllers/instance.controller');

const router = express.Router();
router.route('/init').get(controller.init);
router.route('/qr').get(controller.qr);
router.route('/restore').get(controller.restore);

module.exports = router;
