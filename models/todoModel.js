const mongoose = require('mongoose');

const todoModel = new mongoose.Schema({
    task: { type: String, required: true },
    description: { type: String, required: true },
    created_at: { type: Date, immutable: true, default: () => Date.now() }
})

module.exports = mongoose.model("Todo", todoModel)