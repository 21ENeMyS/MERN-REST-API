const express = require('express');
// konek controller todo
const Apis = require('../controllers/todo.controller');
const router = express.Router();
// Middleware
const bodyParser = require('body-parser');
// json middleware
const jsonParser = bodyParser.json()

router.get('/',Apis.findAll)
router.post('/',jsonParser,Apis.create)

module.exports = router;