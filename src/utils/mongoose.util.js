module.exports = {
    mapObjects: (mongooses) => {
        return mongooses.map(m => m.toObject())
    },
    mapObject: (mongoose) => {
        return mongoose ? mongoose.toObject() : mongoose 
    }
}