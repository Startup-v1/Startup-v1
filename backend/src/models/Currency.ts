import { Schema, model } from "mongoose";

const currencySchema = new Schema({
  code: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  usdPair: {
    type: Number,
    required: true,
  },
});

module.exports = model("Currency", currencySchema);
