import { Schema, model } from "mongoose";

const meetupSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  attendants: {
    type: Number,
    required: true,
  },
});

module.exports = model("Meetup", meetupSchema);
