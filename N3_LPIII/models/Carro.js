const mongoose = require("mongoose");

const Carro = new mongoose.Schema({
  distance: {
    type: String,
    required: true,
  },
  consume: {
    type: String,
    required: true,
  },
  speed: {
    type: String,
    required: true,
  },
  ac: {
    type: String,
    required: true,
  },
},
{ collection: "cars" }
);

module.exports = mongoose.model("Carro", Carro);
