// konek controller todo
const express = require('express');
const Apis = require('../controllers/todo.controller');
const router = express.Router();

router.get('/',Apis.findAll)

module.exports = router;