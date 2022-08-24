const express = require('express');
const router = express.Router();

const sequelize = require('../models/index.js').sequelize;
const initModels = require("../models/init-models");
const models = initModels(sequelize);

/* GET home page. */
router.get('/', function (_req, res) {
  res.render('index');
});

module.exports = router;
