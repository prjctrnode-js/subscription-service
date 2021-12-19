const combineRouters = require('koa-combine-routers');
const healthRoute = require('./healthRoute');
const subscriptionsRoute = require('./subscriptionsRoute');

const router = combineRouters(healthRoute, subscriptionsRoute);

module.exports = router;
