const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, min: 1 },
    created_at: { type: Date, immutable: true, default: () => Date.now() }
})

module.exports = mongoose.model("User", userModel)