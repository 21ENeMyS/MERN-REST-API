const express = require("express");
// konek controller todo
const Apis = require("../controllers/todo.controller");
const router = express.Router();
// Middleware
const bodyParser = require("body-parser");
// json middleware
const jsonParser = bodyParser.json();

router.get("/", Apis.findAll);
router.get("/:id", jsonParser, Apis.findOne);
router.post("/", jsonParser, Apis.create);
router.put("/:id/update", jsonParser, Apis.update);
router.delete("/:id/delete", jsonParser, Apis.remove);

module.exports = router;
