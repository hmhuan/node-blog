const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const Oder = new Schema({
    name: {type: String},
    desciption: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
})