const { response } = require('express');
var express = require('express');
var router = express.Router();
var Carro = require("../models/Carro");


router.get('/form', function (req, res, next) {
  res.render('add', { title: 'Fórmulário de Inscrição' });
});

router.post('/add', async (req, res) => {
  var carro = new Carro(req.body);

  try{
    await carro.save();
    res.redirect("/list");
  } catch(err){
    res.status(500).send(err);
  }


});

module.exports = router;
