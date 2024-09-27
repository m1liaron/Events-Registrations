const eventRouter = require("../routes/eventRoutes");
const participantRouter = require("../routes/participantRouter");
const {ApiRoutes} = require("../common/app/app.common");

const registerRoutes = (app) => {
    app.use(ApiRoutes.Events, eventRouter)
    app.use(ApiRoutes.Participants, participantRouter)
}


module.exports = registerRoutes;