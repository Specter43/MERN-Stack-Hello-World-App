const express = require('express');
const Controller = require('../controllers/controller');

const router = express.Router();

router.get('/getData', Controller.getData);

module.exports = router;
