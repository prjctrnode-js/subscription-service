const db = require('../db/models');

const getSubscription = async (ctx) => {
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
};

module.exports = getSubscription;
