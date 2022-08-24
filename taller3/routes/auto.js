const express = require('express');
const router = express.Router();

const sequelize = require('../models/index.js').sequelize;
const initModels = require("../models/init-models");
const models = initModels(sequelize);

/* GET home page. */
router.get('/', function (_req, res) {
  res.render('index');
});

router.get('/valores/datos', (_req, res) => {
  models.auto.findAll()
    .then(auto => res.json(auto))
    .catch(error => res.status(400).send(error))
});

router.get('/valores/vista', (_req, res) => {
  models.auto.findAll()
    .then(auto => {
      let resultado = '<table>';
      for (let e in auto) {
        resultado += "<br><br><tr><td>" + "modelo: " + auto[e].modelo + "</td><td>" + "puertas: " + auto[e].puertas + "</td></tr>" + "<tr><td>" + "fecha: " + auto[e].fechaDeCompra;
      }
      resultado += '</table>';

      res.send(resultado);
    })
    .catch(error => res.status(400).send(error))
});

module.exports = router;
