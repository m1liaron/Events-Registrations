const { MongoClient } = require('mongodb');

let dbClient;

const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const connectDB = async (url) => {
    try {
        const client = new MongoClient(url);

        dbClient = await client.connect();
        return dbClient;
    } catch (err) {
        console.error('MongoDB connection error:', err);
        throw err;
    }
}

const getDBClient  = () => dbClient;

module.exports = { connectDB, getDBClient }