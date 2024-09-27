const registerRoutes = require('./registerRoutes');
const checkEnvVariables = require('./checkEnvVariables');
const setupGracefulShutdown = require('./setupGracefulShutdown');

module.exports = {
    registerRoutes,
    checkEnvVariables,
    setupGracefulShutdown
}