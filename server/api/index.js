const express = require('express');
const app = express();
const cors = require('cors');
const { connectDB, getDBClient } = require('../db/connect')
const { registerRoutes, checkEnvVariables } = require('../helpers/helpers');
const { envVariables } = require('../common/enum/enum.common');

// Use middlewares
require('dotenv').config()
app.use(express.json());
app.use(cors());

// Routes
registerRoutes(app);

const port = envVariables.PORT || 5000;

( async () => {
    try {
        checkEnvVariables();
        await connectDB(envVariables.MONGO_URI);

        const server = app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        });

    } catch (error) {
        console.error('Error starting the server:', error);
    }
})();