const { envVariables }  = require( "../common/enum/enum.common");
const npmlog = require('npmlog');

const checkEnvVariables = () => {
    const requiredEnvVarKeys = Object.keys(envVariables);
    const missingVars = requiredEnvVarKeys.filter((varName) => !process.env[varName]);
    if (missingVars.length > 0) {
        missingVars.forEach((varName) => {
            npmlog.error('Env Validation', `Missing required environment variable: ${varName}`);
        });
        process.exit(1);
    }

    return missingVars;
}


module.exports = checkEnvVariables;