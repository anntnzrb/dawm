var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require('sequelize');
const Photo = require('../models').photo; 

/* GET home page. */
router.get('/album', function (req, res, next) {
  // res.render('index', { title: 'Express' });

  Photo.findAll()
    .then(photos => {
      res.json(photos)
    })
    .catch(error => res.status(400).send(error))
});

router.get('/album/:id', function (req, res, next) {
  // res.render('index', { title: 'Express' });

  Photo.findOne({ where: { id: req.params.id } })
    .then(photos => {
      res.json(photos)
    })
    .catch(error => res.status(400).send(error))
});

module.exports = router;
