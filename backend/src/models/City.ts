import { Schema, model } from "mongoose";

const citySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
  },
  countryCode: {
    type: Schema.Types.ObjectId,
    ref: "Country",
    required: true,
  },
  population: {
    type: Number,
    required: true,
  },
  monthlyCost: {
    rent: {
      type: Number,
      required: true,
    },
    otherCosts: {
      type: Number,
      required: true,
    }
  },
  photo: {
    type: String,
    required: true,
  },
  weather: {
    type: Schema.Types.ObjectId,
    ref: "Weather",
    required: true,
  },
});

module.exports = model("City", citySchema);
