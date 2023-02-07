const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema
({
    pml:
    {
        required: true,
        type: Number
    },

    title:
    {
        required: true,
        type: String
    },

    composer:
    {
        required: true,
        type: String
    },

    grade:
    {
        required: true,
        type: String
    },

    instrument:
    {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('solos', dataSchema)