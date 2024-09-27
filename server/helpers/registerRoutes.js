const { eventRouter, participantRouter } = require("../routes/routes");
const { ApiRoutes} = require("../common/app/app.common");

const registerRoutes = (app) => {
    app.use(ApiRoutes.Events, eventRouter)
    app.use(ApiRoutes.Participants, participantRouter)
}


module.exports = registerRoutes;