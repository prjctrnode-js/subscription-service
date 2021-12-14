const combineRouters = require('koa-combine-routers');
const Router = require('@koa/router');
const subscriptionsHealth = require('../../controllers/subscriptionsHealth');
const createSubscription = require('../../controllers/createSubscription');
const getSubscription = require('../../controllers/getSubscription');
const deleteSubscriptions = require('../../controllers/deleteSubscriptions');

const healthRoute = new Router();
const subscriptionsRoute = new Router();

healthRoute.get('/subscriptions/health', subscriptionsHealth);

subscriptionsRoute.post('/subscriptions', createSubscription);
subscriptionsRoute.get('/subscriptions', getSubscription);
subscriptionsRoute.delete('/subscriptions/:id', deleteSubscriptions);

const router = combineRouters(healthRoute, subscriptionsRoute);

module.exports = router;
