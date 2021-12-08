const Router = require('@koa/router');

const router = new Router();
const db = require('../../db/models');
const updateOrCreate = require('../../helpers/updateOrCreate');

router.post('/subscriptions', async (ctx) => {
  const { userId, subscriptionId } = ctx.request.body;
  ctx.body = await updateOrCreate(
    db.Subscriptions,
    { subscriptionId, userId },
    {
      userId,
      subscriptionId
    }
  );
});

router.get('/subscriptions', async (ctx) => {
  ctx.body = {
    success: true,
    message: 'Success',
    data: await db.Subscriptions.findAll({
      where: {
        userId: ctx.request.query.userId
      },
      limit: ctx.request.query.limit
    })
  };
});

router.delete('/subscriptions', async (ctx) => {
  const res = await db.Subscriptions.destroy({
    where: {
      id: ctx.request.query.id,
      userId: ctx.request.query.userId
    }
  });
  ctx.body = {
    success: true,
    message: `${
      res ? 'subscription deleted successfully' : 'subscription not find'
    }`
  };
});

module.exports = router;
