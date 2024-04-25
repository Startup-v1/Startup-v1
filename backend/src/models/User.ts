import { Schema, model } from "mongoose";

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  languagesSpoken: [
    {
      type: Schema.Types.ObjectId,
      ref: "Language",
      required: true,
    },
  ],
  currentLocation: {
    type: Schema.Types.ObjectId,
    ref: "City",
    required: true,
  },
  photo: {
    type: String, // Assuming we'll store the URL or path of the photo
    required: true,
  },
  trips: [
    {
      fromDate: {
        type: String,
        required: true,
      },
      toDate: {
        type: String,
        required: true,
      },
      city: {
        type: Schema.Types.ObjectId,
        ref: "City",
        required: true,
      },
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
  reviews: [
    {
      city: {
        type: Schema.Types.ObjectId,
        ref: "City",
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
    },
  ],
});

export default model("User", userSchema);
