const Router = require('@koa/router');
const createSubscription = require('../../controllers/createSubscription');
const getSubscription = require('../../controllers/getSubscription');
const deleteSubscriptions = require('../../controllers/deleteSubscriptions');
const validatorMiddleware = require('../validatorMiddleware');

const subscriptionsRoute = new Router();
subscriptionsRoute.post(
  '/subscriptions',
  validatorMiddleware('subscription', (ctx) => ({
    userId: ctx.request.query.userId,
    subscriptionId: ctx.params.id
  })),
  async (ctx) => {
    const { userId, subscriptionId } = ctx.request.body;
    const { status, body } = await createSubscription(userId, subscriptionId);
    ctx.status = status;
    ctx.body = body;
  }
);
subscriptionsRoute.get(
  '/subscriptions',
  validatorMiddleware('getSubscription', (ctx) => ({
    userId: ctx.request.query.userId
  })),
  async (ctx) => {
    const { userId } = ctx.request.query;
    const { limit } = ctx.request.query;
    const { status, body } = await getSubscription(userId, limit);
    ctx.status = status;
    ctx.body = body;
  }
);
subscriptionsRoute.delete(
  '/subscriptions/:id',
  validatorMiddleware('subscription', (ctx) => ({
    userId: ctx.request.query.userId,
    subscriptionId: ctx.params.id
  })),
  async (ctx) => {
    const { id } = ctx.params;
    const { userId } = ctx.request.query;
    const { status, body } = await deleteSubscriptions(id, userId);
    ctx.status = status;
    ctx.body = body;
  }
);
module.exports = subscriptionsRoute;
