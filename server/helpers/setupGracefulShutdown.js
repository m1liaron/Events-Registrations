const npmlog = require('npmlog');

const setupGracefulShutdown = (server, dbClient) => {
    process.on('SIGTERM', () => {
        console.info('SIGTERM signal received.');
        npmlog.log('Closing http server');
        server.close(async () => {
            console.log('Http server closed');

            if(dbClient) {
                try {
                    await dbClient.end();
                    console.log('Database connection closed');
                } catch (err) {
                    console.error('Error closing database connection:', err);
                }
            }
            process.exit(0);
        })
    })
}

module.exports = setupGracefulShutdown;