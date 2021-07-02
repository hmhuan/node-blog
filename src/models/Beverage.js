const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const Beverage = new Schema({
    name: {type: String},
    desciption: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
})

module.exports = mongoose.model('Beverage', Beverage)