var express = require('express');
var router = express.Router();
var Carro = require("../models/Carro")

router.get("/delete/:id", async (req, res) => {
  try {
    var carro = await Carro.findByIdAndDelete(req.params.id);
    if (!carro) {
      res.status(404).send("nao foi encontrado");
    } else {
      res.redirect("/list");
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
