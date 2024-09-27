require('dotenv').config();

const envVariables = {
    MONGO_URI: process.env.MONGO_URI,
    PORT: process.env.PORT,
    RADIAPI: process.env.RADIAPI
}

module.exports = envVariables;