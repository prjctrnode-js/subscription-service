const db = require('../db/models');

const getSubscription = async (id, limit) => {
  const data = await db.Subscriptions.findAll({
    where: {
      userId: id
    },
    limit
  });
  return {
    status: 200,
    body: {
      success: true,
      message: 'Success',
      data
    }
  };
};

module.exports = getSubscription;
