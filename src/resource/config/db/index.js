const mongoose = require('mongoose')

async function connect(collection) {
    try {
        await mongoose.connect(`mongodb://localhost:27017/testing`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.info("Connect DB successfully.")
    } catch {
        console.error("Connect DB failed.")
    }
}

module.exports = {connect}