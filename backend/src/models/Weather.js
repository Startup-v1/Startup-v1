"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const monthWeatherSchema = new mongoose_1.Schema({
    temperature: {
        min: {
            type: Number,
            required: true,
        },
        max: {
            type: Number,
            required: true,
        },
    },
    precipitations: {
        total: {
            type: Number,
            required: true,
        },
    },
});
const weatherSchema = new mongoose_1.Schema({
    weather: {
        January: monthWeatherSchema,
        February: monthWeatherSchema,
        March: monthWeatherSchema,
        April: monthWeatherSchema,
        May: monthWeatherSchema,
        June: monthWeatherSchema,
        July: monthWeatherSchema,
        August: monthWeatherSchema,
        September: monthWeatherSchema,
        October: monthWeatherSchema,
        November: monthWeatherSchema,
        December: monthWeatherSchema,
    },
});
module.exports = (0, mongoose_1.model)("Weather", weatherSchema);
