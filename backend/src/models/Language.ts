import { Schema, model } from "mongoose";

const languageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = model("Language", languageSchema);
