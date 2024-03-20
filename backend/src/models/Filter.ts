import { Schema, model } from "mongoose";

const filterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = model("Filter", filterSchema);
