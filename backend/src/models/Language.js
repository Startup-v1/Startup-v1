"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const languageSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
});
module.exports = (0, mongoose_1.model)("Language", languageSchema);
