import { Schema, model } from "mongoose";

const countrySchema = new Schema({
  countryCode: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  flag: {
    type: String,
    required: true,
  },
  currency: {
    code: {
      type: String,
      required: true,
    },
    symbol: {
      type: String,
      required: true,
    },
  },
  usdPair: {
    type: Number,
    required: true,
  },
  continent: {
    type: String,
    required: true,
  },
});

module.exports = model("Country", countrySchema);
