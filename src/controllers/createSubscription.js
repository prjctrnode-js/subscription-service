const db = require('../db/models');
const updateOrCreate = require('../helpers/updateOrCreate');

const createSubscription = async (userId, subscriptionId) => {
  const body = await updateOrCreate(
    db.Subscriptions,
    { subscriptionId, userId },
    {
      userId,
      subscriptionId
    }
  );
  return {
    status: 200,
    body
  };
};

module.exports = createSubscription;
