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
    type: Schema.Types.ObjectId,
    ref: "Currency",
    required: true,
  },
  continent: {
    type: String,
    required: true,
  },
  languages: [{ type: Schema.Types.ObjectId, ref: "Language" }],
});

module.exports = model("Country", countrySchema);
