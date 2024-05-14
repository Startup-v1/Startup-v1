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
      name: {
        type: String,
        required: true,
      },
      code: {
        type: String,
        required: true,
      },
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
  photoUrl: {
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
        totalRain: {
          type: Number,
          required: true,
        },
        totalSnow: {
          type: Number,
          required: true,
        },
      },
    ],
    required: true,
  },
});

export default model("City", citySchema);
