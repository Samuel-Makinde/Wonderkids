const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATA_BASE_MONGODB, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("database connected sucessfully")
    } catch (error) {
        console.log("error connecting to server", error.message)
    }
}

module.exports = connectDB