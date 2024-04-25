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
  country: {
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
    safetyIndex: {
      type: Number,
      required: true,
    },
    languages: {
      type: [String],
      required: true,
    },
    continent: {
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
      usdPair: {
        type: Number,
        required: true,
      },
    },
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
    },
  },
  photo: {
    small: {
      type: String,
      required: true,
    },
    large: {
      type: String,
      required: true,
    },
  },
  weather: {
    type: [
      {
        minTemp: {
          type: Number,
          required: true,
        },
        maxTemp: {
          type: Number,
          required: true,
        },
        avgTemp: {
          type: Number,
          required: true,
        },
        totalRainMm: {
          type: Number,
          required: true,
        },
        totalSnowMm: {
          type: Number,
          required: true,
        },
        avgHumidity: {
          type: Number,
          required: true,
        },
      },
    ],
    required: true,
  },
});

module.exports = model("City", citySchema);
