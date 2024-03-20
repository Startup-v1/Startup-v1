import { Schema, model } from "mongoose";

const citySchema = new Schema({
  //TODO: If this keeps growing move it into a separate schema
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
  country: {
    type: String,
    required: true,
  },
  continent: {
    type: String,
    required: true,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
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
  },
  airQualityAnnualAvg: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  //USD/COIN PAIR e.g. 1USD = 0.9 EURO
  currencyValue: {
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
  population: {
    type: Number,
    required: true,
  },
  populationDensity: {
    type: Number,
    required: true,
  },
  //This is not a fk of the languages schema because the data source is not the same. We can't ensure that a mentioned language in a city is available in our languages list
  languages: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = model("City", citySchema);
