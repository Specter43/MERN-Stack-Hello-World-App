const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Model = new Schema(
    {
        name: { type: String, required: true }
    }
)

const collectionName = "testcollection";

module.exports = mongoose.model("azureTest", Model, collectionName);
