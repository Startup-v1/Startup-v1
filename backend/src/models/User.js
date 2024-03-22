"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
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
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Language",
            required: true,
        },
    ],
    currentLocation: {
        type: mongoose_1.Schema.Types.ObjectId,
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
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "City",
                required: true,
            },
        },
    ],
    friends: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    ],
    reviews: [
        {
            city: {
                type: mongoose_1.Schema.Types.ObjectId,
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
    favoriteFilters: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Filter",
            required: true,
        },
    ],
});
module.exports = (0, mongoose_1.model)("User", userSchema);
