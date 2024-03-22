"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const meetupSchema = new mongoose_1.Schema({
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
module.exports = (0, mongoose_1.model)("Meetup", meetupSchema);
