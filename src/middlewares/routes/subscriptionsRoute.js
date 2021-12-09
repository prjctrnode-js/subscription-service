const Router = require('@koa/router');

const router = new Router();
const createSubscription = require('../../controllers/createSubscription');
const getSubscription = require('../../controllers/getSubscription');
const deleteSubscriptions = require('../../controllers/deleteSubscriptions');

router.post('/subscriptions', createSubscription);
router.get('/subscriptions', getSubscription);
router.delete('/subscriptions', deleteSubscriptions);

module.exports = router;
