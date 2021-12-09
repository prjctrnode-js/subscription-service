const Router = require('@koa/router');

const router = new Router();
const subscriptionsHealth = require('../../controllers/subscriptionsHealth');

router.get('/subscriptions/health', subscriptionsHealth);

module.exports = router;
