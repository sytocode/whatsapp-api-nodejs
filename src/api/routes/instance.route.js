const express = require('express');
const controller = require('../controllers/instance.controller');
const keyVerify = require("../middlewares/keyCheck")
const loginVerify = require("../middlewares/loginCheck")

const router = express.Router();
router.route('/init').get(controller.init);
router.route('/qr').get(controller.qr);
router.route('/restore').get(controller.restore);
router.route('/qr').get(keyVerify, controller.qr);
router.route('/info').get(keyVerify, controller.info);
router.route('/restore').get(controller.restore);
router.route('/logout').delete(keyVerify, loginVerify, controller.logout);
router.route('/delete').delete(keyVerify, loginVerify, controller.delete);

module.exports = router;
