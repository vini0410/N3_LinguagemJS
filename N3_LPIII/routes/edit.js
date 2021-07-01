var express = require('express');
const { response } = require('../app');
var router = express.Router();
var Carro = require("../models/Carro")


router.get("/edit/:id", function (req, res, next) {
  Carro.findById(req.params.id)
    .then((carro) => {
      res.render("edit", {
        title: "Fórmulário de Edição",
        id: req.params.id,
        distance: carro.distance,
        consume: carro.consume,
        speed: carro.speed,
        ac: carro.ac,
      });
    })
    .catch((error) => {
      res.send("Erro ao localizar o carro. Erro: " + error);
    });
});

router.post("/edition/:id", async (req, res) => {
  try {
    await Carro.findByIdAndUpdate(req.params.id, req.body) // Person.updateOne(req.params.id, req.body)
    res.redirect("/list");
  } catch (err) {
    res.status(500).send(err);
  }
 
});

module.exports = router;
