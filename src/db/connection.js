require("dotenv").config();
const mongoose = require("mongoose");

const connection = async () => {
    try{
        console.log("Attempting to connect to the database...")
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Success, now connected to the Movie db.");
    } catch (error) {
        console.log(error);
    }
};

connection();
