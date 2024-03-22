"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const citySchema = new mongoose_1.Schema({
    //TODO: If this keeps growing move it into a separate schema
    cost: {
        food: {
            type: String,
            required: true,
        },
        hotel: {
            type: String,
            required: true,
        },
        rent: {
            type: String,
            required: true,
        },
        taxi: {
            type: String,
            required: true,
        },
    },
    photo: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    continent: {
        type: String,
        required: true,
    },
    reviews: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    usefulApps: [
        {
            type: String,
            required: true,
        },
    ],
    weather: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Weather",
    },
    airQualityAnnualAvg: {
        type: Number,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    //USD/COIN PAIR e.g. 1USD = 0.9 EURO
    currencyValue: {
        type: Number,
        required: true,
    },
    drinkableTapWater: {
        type: Boolean,
        required: true,
    },
    internetSpeed: {
        type: Number,
        required: true,
    },
    safetyScore: {
        type: Number,
        required: true,
    },
    gdpPerCapit: {
        type: Number,
        required: true,
    },
    population: {
        type: Number,
        required: true,
    },
    populationDensity: {
        type: Number,
        required: true,
    },
    //This is not a fk of the languages schema because the data source is not the same. We can't ensure that a mentioned language in a city is available in our languages list
    languages: [
        {
            type: String,
            required: true,
        },
    ],
});
module.exports = (0, mongoose_1.model)("City", citySchema);
