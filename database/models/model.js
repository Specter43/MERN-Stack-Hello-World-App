const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HelloWorld = new Schema(
    {
        Hello: { type: String, required: true },
        World: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('TEST_DB', HelloWorld, "TEST");
