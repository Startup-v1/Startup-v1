import { Schema, model } from "mongoose";

const monthWeatherSchema = new Schema({
  temperature: {
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
  },
  precipitations: {
    total: {
      type: Number,
      required: true,
    },
  },
});

const weatherSchema = new Schema({
  weather: {
    January: monthWeatherSchema,
    February: monthWeatherSchema,
    March: monthWeatherSchema,
    April: monthWeatherSchema,
    May: monthWeatherSchema,
    June: monthWeatherSchema,
    July: monthWeatherSchema,
    August: monthWeatherSchema,
    September: monthWeatherSchema,
    October: monthWeatherSchema,
    November: monthWeatherSchema,
    December: monthWeatherSchema,
  },
});

module.exports = model("Weather", weatherSchema);
