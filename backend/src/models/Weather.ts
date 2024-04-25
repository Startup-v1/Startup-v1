import { Schema, model } from "mongoose";

const monthWeatherSchema = new Schema({
  temperatureCelsius: {
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
    avg: {
      type: Number,
      required: true,
    },
  },
  precipitations: {
    totalRainMm: {
      type: Number,
      required: true,
    },
    totalSnowMm: {
      type: Number,
      required: true,
    },
  },
  humidity: {
    avgHumidity: {
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
