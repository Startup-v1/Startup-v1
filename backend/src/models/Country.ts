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
  safetyIndex: {
    type: Number,
    required: true,
  },
  currency: {
    type: Schema.Types.ObjectId,
    ref: "Currency",
    required: true,
  },
  languages: [{ type: Schema.Types.ObjectId, ref: "Language" }],
  continent: {
    type: String,
    required: true,
  }
});

module.exports = model("Country", countrySchema);
