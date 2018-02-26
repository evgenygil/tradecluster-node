const mongoose = require('mongoose');

// BotConfig Schema
let botconfigSchema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    // Gekko, Haas
    bot: {
        type: String,
        required: true
    },
    preview: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    arclink: {
        type: String
    },
    cost: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});

let BotConfig = module.exports = mongoose.model('BotConfig', botconfigSchema);