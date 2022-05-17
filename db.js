const mongoose = require('mongoose');

const connectDB = async () => {

    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`DB connected to cluster ${conn.connection.host}`.blue.underline)

    } catch(err) {
        console.log(`Error: ${err.message}`.red);
    }
   
}

module.exports = connectDB;