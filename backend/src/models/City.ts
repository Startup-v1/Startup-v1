import { Schema, model } from "mongoose";

const citySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
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
  populationDensity: {
    type: Number,
    required: true,
  },
  cost: {
    food: {
      type: String,
      required: true,
    },
    hotel: {
      type: String,
      required: true,
    },
    rent: {
      type: String,
      required: true,
    },
    taxi: {
      type: String,
      required: true,
    },
  },
  photo: {
    type: String,
    required: true,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
  usefulApps: [
    {
      type: String,
      required: true,
    },
  ],
  weather: {
    type: Schema.Types.ObjectId,
    ref: "Weather",
    required: true,
  },
  airQualityAnnualAvg: {
    type: Number,
    required: true,
  },
  drinkableTapWater: {
    type: Boolean,
    required: true,
  },
  internetSpeed: {
    type: Number,
    required: true,
  },
  safetyScore: {
    type: Number,
    required: true,
  },
  gdpPerCapit: {
    type: Number,
    required: true,
  },
});

module.exports = model("City", citySchema);
