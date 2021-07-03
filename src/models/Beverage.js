const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const Beverage = new Schema({
    _id: {type: Number},
    name: {type: String},
    desciption: {type: String},
    image: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
})

module.exports = mongoose.model('Beverage', Beverage)