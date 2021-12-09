const db = require('../db/models');
const updateOrCreate = require('../helpers/updateOrCreate');

const createSubscription = async (ctx) => {
  const { userId, subscriptionId } = ctx.request.body;
  ctx.body = await updateOrCreate(
    db.Subscriptions,
    { subscriptionId, userId },
    {
      userId,
      subscriptionId
    }
  );
};

module.exports = createSubscription;
