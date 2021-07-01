var express = require("express");
const Carro = require("../models/Carro");
var router = express.Router();


router.get("/list", async (req, res) => {
  var carro = await Carro.find({});
  try {
    res.render("list",{title:"listagem de carros", carro: carro})
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;

router.get('/list/:id', async (req, res) => {
  var carro = await Carro.findOne({_id: req.params.id});
  try{
    res.send(carro);
  } catch (err) {
    res.status(500).send(err);
  }
});


module.exports = router;
